use ic_cdk::caller;
use ic_cdk_macros::{query, update};
use candid::Principal;
use std::cell::RefCell;
use std::collections::HashMap;

type CertificateId = u64;

#[derive(Clone, Debug, Default, candid::CandidType, serde::Deserialize, serde::Serialize)]
struct LandCertificate {
    owner: String,
    location: String,
    size: f64,
    issued_by: String,
}

thread_local! {
    static CERTIFICATES: RefCell<HashMap<CertificateId, LandCertificate>> = RefCell::new(HashMap::new());
}

#[update]
fn issue_certificate(id: CertificateId, owner: String, location: String, size: f64, issued_by: String) -> String {
    CERTIFICATES.with(|certs| {
        let mut certs = certs.borrow_mut();
        if certs.contains_key(&id) {
            return format!("Certificate {} already exists!", id);
        }
        let cert = LandCertificate {
            owner: owner.clone(),
            location,
            size,
            issued_by,
        };
        certs.insert(id, cert);
        format!("Certificate {} issued to {}", id, owner)
    })
}

#[update]
fn transfer_ownership(id: CertificateId, new_owner: String) -> (bool, String) {
    CERTIFICATES.with(|certs| {
        let mut certs = certs.borrow_mut();
        if let Some(cert) = certs.get_mut(&id) {
            cert.owner = new_owner.clone();
            return (true, format!("Certificate {} ownership transferred to {}", id, new_owner));
        }
        (false, "Certificate not found".to_string())
    })
}

#[query]
fn get_certificate(id: CertificateId) -> Option<LandCertificate> {
    CERTIFICATES.with(|certs| certs.borrow().get(&id).cloned())
}

#[query]
async fn whoami() -> Principal {
  caller()
}

ic_cdk::export_candid!();
