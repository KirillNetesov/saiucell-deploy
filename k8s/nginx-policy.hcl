path "secret/data/nginx/*" {
  capabilities = ["create", "read", "update", "delete", "list"]
}

path "secret/metadata/nginx/*" {
  capabilities = ["read", "list"]
}
