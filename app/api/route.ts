 export const dynamic = "force-static"
export async function GET(request: Request){
    return Response.redirect('http://localhost:3000/fidelizzato/card?add_points=4');
}