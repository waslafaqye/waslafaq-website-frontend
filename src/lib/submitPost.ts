export default async function postRequest() {

    try {
        const apiUrl = 'http://website.waslafaq.net/api/request';

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            cache: 'no-store',
            headers: headers,
            body: JSON.stringify({
                'some': 'soemthing'
            }),
        })
        console.log(response.status)

        //         .then((response) => {
        //
        //             console.log(response.status)
        //
        //             if (response.ok) {
        //                 toast({
        //                     title: "You submitted the following values:",
        //                     description: (
        //                         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        //   <code className="text-white">Success</code>
        // </pre>
        //                     ),
        //                 })
        //                 return response.json();
        //
        //             } else {
        //                 throw new Error(`HTTP error! Status: ${response.status}`);
        //             }
        //         })

    } catch (e: any) {
        console.log("Error in function " + e)
    }


}