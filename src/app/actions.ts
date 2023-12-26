import * as z from "zod";

export const FormSchema = z.object({
    // name: z.string().min(3, {
    //     message: "يجب ان يكون الاسم على الاقل مكون من 3 احرف",
    // }),
    // email: z.string().email('البريد الالكتروني غير صحيح').min(1, {message: 'البريد الالكتروني غير صحيح'}),
    //
    // message: z.string().min(20, {
    //     message: 'يجب ان لا يقل نص الطلب عن 20 حرف',
    // }),
    name: z.string(),
    email: z.string(),
    message: z.string(),
    title: z.string(),

})
export default async function postRequest(page: any) {
    console.log("basdbnsad")

    //await gettingSocialMedia(page)
    // try {
    //     const apiUrl = 'http://website.waslafaq.net/api/admin/login';
    //
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     };
    //
    //     fetch(apiUrl, {
    //         method: 'POST',
    //         cache: 'no-store',
    //         headers: headers,
    //         body: JSON.stringify({
    //             'some': 'soemthing'
    //         }),
    //     })
    //         .then((response) => {
    //
    //             console.log(response.status)
    //
    //             if (response.ok) {
    //
    //                 return response.json();
    //
    //             } else {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //         })
    //
    // } catch (e: any) {
    //     console.log("Error in function " + e)
    // }
}