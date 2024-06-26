export type Email_Checker = {
    is_disposable: boolean,
    has_mx_records: boolean,
    can_receive_email: boolean,
    errors: {
        syntax: string | null,
        disposable_email: string | null,
        mx_records: string | null,
        receive_email: string | null
    },
    ip_address: string | null
    domain: string,
    subdomain: string
}
