/* Mercado Livre — produtos informados em 02/11/2026.
   Os preços são referências da captura enviada; não há atualização em tempo real.
   Não alterar a URL de afiliado, não importar produtos da Shopee. */
(function(){
"use strict";
const catalog=[
{title:"Tênis casual Kappa Zenit masculino unissex preto",price:89.99,category:"moda",link:"https://meli.la/2XTLftC",item:"MLB5408593708",image:"https://kappafootwear.com.br/cdn/shop/files/tenis-casual-kappa-zenit-masculino-2.webp?v=1758901468"},
{title:"Carregador inteligente de bateria Woosh 12V 6A bivolt",price:78.99,category:"automotivo",link:"https://meli.la/2HSP2tv",item:"MLB7803770812",photo:"712572-MLA119455735087_102026-R"},
{title:"Philips OneBlade QP1425/10 com pente ajustável",price:139.90,category:"beleza",link:"https://meli.la/2i4Hb99",item:"MLB4208012055",photo:"750670-MLA118429558724_102026-R"},
{title:"Tablet VAIO TL10 8GB 128GB com teclado",price:1499.00,category:"eletronicos",link:"https://meli.la/1ir8Msb",item:"MLB3964141405",photo:"765639-MLA112801114353_062026-R"},
{title:"Grand Theft Auto VI para PlayStation 5 — pré-venda",price:418.41,category:"games",link:"https://meli.la/2UHEBJb",item:"MLB7413456100",photo:"639067-MLA114816196520_082026-R"},
{title:"Lixeira automática inteligente USB-C com sensor",price:58.90,category:"casa",link:"https://meli.la/1uaDZR1",item:"MLB6805401578",photo:"890665-MLA116158791678_092026-R"},
{title:"Tênis Puma Flyer Runner Mesh BDP preto",price:189.99,category:"moda",link:"https://meli.la/24kU57W",item:"MLB3806655487",photo:"730513-MLB80451340719_112024-R"},
{title:"Aspirador de pó e água WAP GTW 10 1400W",price:259.90,category:"casa",link:"https://meli.la/26TZDG8",item:"MLB2631902457",photo:"985627-MLA100060225801_122025-R"},
{title:"Bebedouro Britânia Aquaplus BBE12P preto",price:302.90,category:"casa",link:"https://meli.la/1BHvViq",item:"MLB3917376669",photo:"903719-MLA100069942107_122025-R"},
{title:"Máscara Kérastase Résistance Thérapiste 200ml",price:229.00,category:"beleza",link:"https://meli.la/1hCLZyu",item:"MLB4592569844",photo:"753132-MLA99450295832_112025-R"},
{title:"Motorola Moto G67 5G 256GB chumbo",price:1392.79,category:"celulares",link:"https://meli.la/24hyBST",item:"MLB6420203084",photo:"859554-MLA106048223542_022026-R"},
{title:"Escova secadora Britânia BEC07R 1300W rosa",price:89.58,category:"beleza",link:"https://meli.la/1TpihjR",item:"MLB4311848782",photo:"717664-MLA116175833066_092026-R"},
{title:"Kit Principia skincare pele sensível com FPS 60",price:92.47,category:"beleza",link:"https://meli.la/1kFPgb9",item:"MLB5554213538",photo:"761257-MLA108807654621_032026-R"},
{title:"Apple iPhone 15 128GB azul",price:3779.10,category:"celulares",link:"https://meli.la/1SZ4XDW",item:"MLB4408547152",photo:"831434-MLA96401363339_102025-R"},
{title:"Cooktop Electrolux KE5GR 5 bocas vidro preto",price:517.75,category:"casa",link:"https://meli.la/2T2QJ6D",item:"MLB4091456221",photo:"720909-MLA99966292541_112025-R"},
{title:"Cadeira presidente NR17 HomeNow Columbus mesh preta",price:286.98,category:"moveis",link:"https://meli.la/2gGSt62",item:"MLB4551866531",photo:"651752-MLA95643261450_102025-R"},
{title:"Smartphone Realme Note 80s 128GB azul-claro",price:874.83,category:"celulares",link:"https://meli.la/2Vp2MoS",item:"MLB4669891397",photo:"682915-MLA109269844598_042026-R"},
{title:"Tênis Asics Gel Revelation original preto",price:99.90,category:"moda",link:"https://meli.la/2Ra3Ftm",item:"MLB4690598815",photo:"602828-MLB106583359197_022026-R"},
{title:"Auxiliar de partida Floots com compressor portátil",price:150.70,category:"automotivo",link:"https://meli.la/26dHSQ",item:"MLB6939196310",photo:"873588-MLA112878636368_072026-R"},
{title:"Console PlayStation 5 Pro Sony 2TB branco",price:7067.07,category:"games",link:"https://meli.la/1wLdxiz",item:"MLB7613817060",photo:"727482-MLA99962144409_112025-R"}
];
const grid=document.querySelector("#grid");
if(!grid)return;
const exists=new Set(Array.from(grid.querySelectorAll("a.buy"), a=>a.getAttribute("href")));
const money=n=>n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const placeholder="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><rect width="500" height="500" fill="#f1f5fb"/><rect x="126" y="145" width="248" height="210" rx="28" fill="none" stroke="#9db1d0" stroke-width="8"/><circle cx="208" cy="220" r="26" fill="#b2c3dd"/><path d="M145 330l95-92 55 62 45-45 40 75" stroke="#b2c3dd" stroke-width="10" fill="none"/><text x="250" y="403" text-anchor="middle" font-family="Arial" fill="#526987" font-size="19">Imagem indisponível</text></svg>');
const wrap=document.createDocumentFragment();
for(const p of catalog){
 if(exists.has(p.link))continue;
 const card=document.createElement("article");
 card.className="card";
 card.dataset.category=p.category;
 card.dataset.itemId=p.item;
 card.dataset.search=p.title.toLocaleLowerCase("pt-BR");
 const photo=document.createElement("div");photo.className="photo";
 const badge=document.createElement("span");badge.className="badge";badge.textContent="Mercado Livre";
 const image=document.createElement("img");image.loading="lazy";image.decoding="async";image.alt=p.title;
 const high=p.image||"https://http2.mlstatic.com/D_NQ_NP_2X_"+p.photo+".webp";
 const low=p.photo?"https://http2.mlstatic.com/D_Q_NP_2X_"+p.photo+".webp":placeholder;
 image.src=high;photo.dataset.gallery=high;
 let fallbacks=0;
 image.addEventListener("error",()=>{
  fallbacks++;
  if(fallbacks===1 && low!==high){image.src=low;photo.dataset.gallery=low}
  else if(fallbacks<=2){image.src=placeholder;photo.dataset.gallery=placeholder}
 });
 photo.append(badge,image);card.append(photo);
 const body=document.createElement("div");body.className="body";
 const store=document.createElement("div");store.className="store";store.textContent="Mercado Livre";
 const name=document.createElement("h3");name.className="name";name.textContent=p.title;
 const price=document.createElement("div");price.className="price";price.textContent=money(p.price);
 const buy=document.createElement("a");buy.className="buy";buy.textContent="Ver oferta";buy.href=p.link;buy.target="_blank";buy.rel="nofollow sponsored noopener noreferrer";
 body.append(store,name,price,buy);card.append(body);wrap.append(card);
}
grid.prepend(wrap);
const nav=document.querySelector(".tabs");
if(nav){
 const filters=[["moda","Moda e tênis"],["games","Games"],["moveis","Móveis e escritório"]];
 for(const [category,label] of filters){
  if(nav.querySelector('[data-filter="'+category+'"]'))continue;
  const button=document.createElement("button");button.className="tab";button.dataset.filter=category;button.textContent=label;nav.append(button);
 }
}
})();