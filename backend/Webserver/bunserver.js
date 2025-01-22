import{serve} from 'bun'
serve({
    fetch(request){
        const url=new URL(request.url);
        if (url.pathname==='/')
        {
            return new Response('hello ice tea ',{status :200})
        }else   if (url.pathname==='/ice-tea')
            {
                return new Response('hello ice tea , this is the good option ',{status :200})
            }else{
                return new Response('404 , not found this is empty ')
            }
    },
    port:3000,
    hostname:'127.0.0.1'
})