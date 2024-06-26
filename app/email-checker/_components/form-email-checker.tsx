"use client"
import React from 'react';

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import ResultEmailChecker from "@/app/email-checker/_components/result-email-checker";
import {EmailCheckerForm} from "@/schema/zod/email-checker-form";
import {EmailChecker} from "@/action/email-checker";
import {Email_Checker} from "@/types/actions";
import {Loader2} from "lucide-react";

const FormEmailChecker = () => {
    const [apiData, setApiData] = React.useState<Email_Checker | null>(null);
    const [isPending, startTransition] = React.useTransition();
    const form = useForm<z.infer<typeof EmailCheckerForm>>({
        resolver: zodResolver(EmailCheckerForm),
        defaultValues: {
            email: "",
        },
    })

    function onSubmit(values: z.infer<typeof EmailCheckerForm>) {
        setApiData(null)
        startTransition(async () => {
            await EmailChecker(values).then(res => {
                setApiData(res)
            })
        })
    }

    return (
        <div className="mx-auto w-full sm:w-10/12">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                      className="my-10 space-y-8 rounded border border-gray-200/20 bg-slate-900/40 p-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Enter an email address to verify:</FormLabel>
                                <FormControl>
                                    <Input placeholder="example@devkraken.com" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button disabled={isPending} type="submit" className="w-full">
                        {isPending ? <Loader2 className="mr-2 size-4 animate-spin"/> : "Verify"}
                    </Button>
                </form>
            </Form>
            {apiData && <ResultEmailChecker data={apiData}/>}
        </div>
    );
};

export default FormEmailChecker;