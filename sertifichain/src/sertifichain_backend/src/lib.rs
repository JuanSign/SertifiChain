use candid::{CandidType, Deserialize};
use ic_cdk_macros::{init, query, update};
use ic_cdk::storage;
use serde::Serialize;
use std::collections::HashMap;

#[derive(CandidType, Deserialize, Serialize, Clone)]
pub struct Certificate {
    pub nib: String,
    pub iat: u64, // Auto-generated timestamp
    pub own: String,
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

type CertificateStore = HashMap<String, Certificate>;

#[init]
fn init() {
    storage::stable_save((&CertificateStore::new(),)).unwrap();
}

#[update]
fn create_certificate(nib: String, own: String, loc: Loc, det: Det) {
    let (mut store,): (CertificateStore,) = storage::stable_restore().unwrap_or_default();

    let iat = ic_cdk::api::time() / 1_000_000_000; 

    let cert = Certificate { nib: nib.clone(), iat, own, loc, det };
    store.insert(nib, cert);

    storage::stable_save((&store,)).unwrap();
}


#[query]
fn get_certificate(nib: String) -> Option<Certificate> {
    let (store,): (CertificateStore,) = storage::stable_restore().unwrap_or_default(); 
    store.get(&nib).cloned()
}