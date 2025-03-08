use candid::{CandidType, Deserialize};
use ic_cdk_macros::{init, query, update};
use ic_cdk::storage;
use serde::Serialize;
use std::collections::{HashMap, HashSet};

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Certificate {
    pub nib: String,
    pub iat: u64, // Auto-generated timestamp
    pub own: String, // Owner is now a raw string
    pub loc: Loc,
    pub det: Det,
}

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Loc {
    pub p: String,
    pub c: String,
    pub d: String,
    pub v: String,
}

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Det {
    pub n: f64,
    pub e: f64,
    pub s: f64,
    pub w: f64,
}

// Mapping: String (owner) -> Set of NIBs
type OwnerCertificates = HashMap<String, HashSet<String>>;

// Mapping: NIB -> Certificate
type CertificateStore = HashMap<String, Certificate>;

#[init]
fn init() {
    storage::stable_save((&CertificateStore::new(), &OwnerCertificates::new())).unwrap();
}

/// Get the principal ID of the caller as a raw string
#[query]
fn get_my_principal() -> String {
    ic_cdk::api::caller().to_text()
}

/// Create a certificate by specifying the owner
#[update]
fn create_certificate_for(nib: String, owner: String, loc: Loc, det: Det) {
    create_certificate_internal(nib, owner, loc, det);
}

/// Internal function to create a certificate
fn create_certificate_internal(nib: String, owner: String, loc: Loc, det: Det) {
    let (mut cert_store, mut owner_map): (CertificateStore, OwnerCertificates) =
        storage::stable_restore().unwrap_or_default();

    let iat = ic_cdk::api::time() / 1_000_000_000;

    let cert = Certificate {
        nib: nib.clone(),
        iat,
        own: owner.clone(), // Store owner as a raw string
        loc,
        det,
    };

    cert_store.insert(nib.clone(), cert);
    owner_map.entry(owner).or_insert_with(HashSet::new).insert(nib);

    storage::stable_save((&cert_store, &owner_map)).unwrap();
}

/// Get a certificate by NIB
#[query]
fn get_certificate(nib: String) -> Option<Certificate> {
    let (cert_store, _): (CertificateStore, OwnerCertificates) = storage::stable_restore().unwrap_or_default();
    cert_store.get(&nib).cloned()
}

/// Get certificates owned by the caller
#[query]
fn get_my_certificates() -> Vec<Certificate> {
    let (cert_store, owner_map): (CertificateStore, OwnerCertificates) =
        storage::stable_restore().unwrap_or_default();

    let caller = ic_cdk::api::caller().to_text();
    if let Some(nibs) = owner_map.get(&caller) {
        nibs.iter()
            .filter_map(|nib| cert_store.get(nib).cloned())
            .collect()
    } else {
        Vec::new()
    }
}

/// Get all certificates for a specific owner
#[query]
fn get_certificates_for(owner: String) -> Vec<Certificate> {
    let (cert_store, owner_map): (CertificateStore, OwnerCertificates) =
        storage::stable_restore().unwrap_or_default();

    if let Some(nibs) = owner_map.get(&owner) {
        nibs.iter().filter_map(|nib| cert_store.get(nib).cloned()).collect()
    } else {
        Vec::new()
    }
}
