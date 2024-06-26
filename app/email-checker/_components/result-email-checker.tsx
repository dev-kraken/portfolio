import React from 'react';
import {Email_Checker} from "@/types/actions";
import {cn} from "@/lib/utils";

interface ResultEmailCheckerProps {
    data: Email_Checker | null;
}

const ResultEmailChecker = ({data}: ResultEmailCheckerProps) => {
    return (
        <div
            className={cn(data?.is_disposable ? "bg-gradient-to-tr from-rose-500 to-rose-800" : "bg-gradient-to-tr from-emerald-500 to-emerald-800", "flex flex-col gap-2 rounded p-6")}>
            <h2 className="text-3xl">
                Domain: {data?.domain}
            </h2>
            <h2 className="my-2 text-2xl">
                {data?.is_disposable ? (data?.errors.disposable_email) : ("Email is from a valid email provider")}
            </h2>
            <h4 className="text-xl">Disposable: {data?.is_disposable ? "Yes" : "No"}</h4>
            <h4 className="text-xl">Email Deliverable: {data?.can_receive_email ? "Yes" : "No"}</h4>
            {data?.errors.receive_email && <p>{data?.errors.receive_email}</p>}
            <h4 className="text-xl">Tested MX: {data?.subdomain} ({data?.ip_address})</h4>
            {data?.errors.mx_records && <p>{data?.errors.mx_records}</p>}
        </div>
    );
};

export default ResultEmailChecker;