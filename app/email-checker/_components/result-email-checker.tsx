import React from "react";
import { Email_Checker } from "@/types/actions";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheck, CircleX } from "lucide-react";

interface ResultEmailCheckerProps {
  data: Email_Checker | null;
}

const ResultEmailChecker = ({ data }: ResultEmailCheckerProps) => {
  return (
    <Table
      className={cn(
        data?.is_disposable
          ? "bg-gradient-to-tr from-rose-800/20 to-rose-600/40"
          : "bg-gradient-to-tr from-emerald-500/30 to-emerald-800/30",
        "mt-4 w-full overflow-auto rounded-lg",
      )}
    >
      <TableCaption>
        {data?.subdomain} ({data?.ip_address})
      </TableCaption>
      <TableHeader>
        <TableRow className="hover:bg-gray-50/1">
          <TableHead className="text-gray-300">Domain</TableHead>
          <TableHead className="text-gray-300">Email</TableHead>
          <TableHead className="text-gray-300">Disposable</TableHead>
          <TableHead className="text-gray-300">Deliverable</TableHead>
          <TableHead className="text-gray-300">Mail Server</TableHead>
          <TableHead className="text-gray-300">MX</TableHead>
          <TableHead className="text-gray-300">IP</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-gray-50/1 text-center">
          <TableCell>
            <span>{data?.domain}</span>
          </TableCell>
          <TableCell className="font-medium">
            {data?.is_disposable ? (
              <span className="font-bold text-yellow-600">Risk</span>
            ) : (
              <span className="font-bold text-green-600">Valid</span>
            )}
          </TableCell>
          <TableCell>
            {data?.is_disposable ? (
              <span className="flex items-center justify-center gap-2">
                <CircleCheck className="size-5 text-green-500" />
                Yes
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <CircleX className="size-5 text-red-500" />
                No
              </span>
            )}
          </TableCell>
          <TableCell>
            {data?.can_receive_email ? (
              <span className="flex items-center justify-center gap-2">
                <CircleCheck className="size-5 text-green-500" />
                Yes
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <CircleX className="mx-auto size-5 text-red-500" />
                No
              </span>
            )}
          </TableCell>
          <TableCell>{data?.subdomain}</TableCell>
          <TableCell>
            {data?.has_mx_records ? (
              <CircleCheck className="mx-auto size-5 text-green-500" />
            ) : (
              <CircleX className="mx-auto size-5 text-red-500" />
            )}
          </TableCell>
          <TableCell>
            <span>{data?.ip_address}</span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResultEmailChecker;
