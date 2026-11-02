/* Achados WWTOM — 20 novos produtos Mercado Livre, registrados em 02/11/2026.
   Os preços são capturas informadas pelo administrador e podem mudar na loja.
   Sem alterações nos produtos existentes ou integração Shopee. */
(function(){
"use strict";
const rows=[["Tênis Kappa Zenit masculino preto",89.99,229.99,"2XTLftC","5408593708","moda","https://kappafootwear.com.br/cdn/shop/files/zenit-k135-pto-bco-perf.jpg?v=1762856392"],["Carregador inteligente de bateria Woosh 12V 6A",78.99,null,"2HSP2tv","7803770812","automotivo","D_Q_NP_2X_712572-MLA119455735087_102026-R.webp"],["Philips OneBlade QP1425/10 com pente ajustável",139.9,212.38,"2i4Hb99","4208012055","beleza","D_Q_NP_2X_750670-MLA118429558724_102026-R.webp"],["Tablet VAIO TL10 8GB 128GB com teclado",1499,1899,"1ir8Msb","3964141405","eletronicos","D_Q_NP_765639-MLA112801114353_062026-R.webp"],["Grand Theft Auto VI para PS5 — pré-venda",418.41,449.9,"2UHEBJb","7413456100","games","D_Q_NP_639067-MLA114816196520_082026-R.webp"],["Lixeira inteligente automática USB-C com sensor",58.9,259.99,"1uaDZR1","6805401578","casa","D_Q_NP_2X_890665-MLA116158791678_092026-R.webp"],["Tênis Puma Flyer Runner Mesh BDP preto",189.99,349.99,"24kU57W","3806655487","moda","D_Q_NP_730513-MLB80451340719_112024-R-tnis-flyer-runner-mesh-bdp-puma.webp"],["Aspirador de pó e água WAP GTW 10 1400W",259.9,485.57,"26TZDG8","2631902457","casa","D_Q_NP_2X_985627-MLA100060225801_122025-R.webp"],["Bebedouro Britânia Aquaplus BBE12P preto",302.9,349,"1BHvViq","3917376669","casa","D_Q_NP_903719-MLA100069942107_122025-R.webp"],["Máscara Kérastase Résistance Thérapiste 200ml",229,399.9,"1hCLZyu","4592569844","beleza","D_Q_NP_753132-MLA99450295832_112025-R.webp"],["Motorola Moto G67 5G 256GB chumbo",1392.79,2099,"24hyBST","6420203084","celulares","D_Q_NP_2X_859554-MLA106048223542_022026-R.webp"],["Escova secadora Britânia Soft BEC07R 1300W rosa",89.58,139.9,"1TpihjR","4311848782","beleza","D_Q_NP_717664-MLA116175833066_092026-R.webp"],["Kit Principia skincare sensível com protetor FPS 60",92.47,137,"1kFPgb9","5554213538","beleza","D_Q_NP_761257-MLA108807654621_032026-R.webp"],["Apple iPhone 15 128GB azul",3779.1,7209,"1SZ4XDW","4408547152","celulares","D_Q_NP_831434-MLA96401363339_102025-R.webp"],["Cooktop Electrolux KE5GR 5 bocas vidro preto",517.75,629,"2T2QJ6D","4091456221","casa","D_Q_NP_2X_720909-MLA99966292541_112025-R.webp"],["Cadeira HomeNow Columbus NR17 tela mesh",286.98,659,"2gGSt62","4551866531","moveis","D_Q_NP_2X_651752-MLA95643261450_102025-R.webp"],["Realme Note 80s 128GB 4GB RAM azul-claro",874.83,1099,"2Vp2MoS","4669891397","celulares","D_Q_NP_2X_682915-MLA109269844598_042026-R.webp"],["Tênis Asics Gel Revelation preto",99.9,333,"2Ra3Ftm","4690598815","moda","D_Q_NP_602828-MLB106583359197_022026-R-tnis-asics-gel-revelation-original-couro-academia-caminhada.webp"],["Auxiliar de partida Floots com compressor de ar",150.7,390,"26dHSQ","6939196310","automotivo","D_Q_NP_2X_873588-MLA112878636368_072026-R.webp"],["Console PlayStation 5 Pro Sony 2TB branco",7067.07,7599,"1wLdxiz","7613817060","games","D_Q_NP_2X_727482-MLA99962144409_112025-R.webp"]];
const grid=document.querySelector("#grid");
if(!grid)return;
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
const money=n=>"R$ "+n.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});
const productsHTML=rows.map(([title,price,previous,shortId,itemId,category,picture])=>{
 const image=picture.startsWith("https://")?picture:"https://http2.mlstatic.com/"+picture;
 const photo=esc(image),name=esc(title),href="https://meli.la/"+shortId;
 const discount=previous&&previous>price?Math.round((1-price/previous)*100):0;
 return '<article class="card offer-nov2026" data-category="'+category+'" data-item-id="MLB'+itemId+'" data-search="'+esc((title+" "+category+" MLB"+itemId).toLocaleLowerCase("pt-BR"))+'">'+
 '<div class="photo" tabindex="0" role="button" aria-label="Ampliar foto de '+name+'" data-gallery="'+photo+'">'+
 '<span class="badge">'+(discount?discount+'% OFF':'Mercado Livre')+'</span><img src="'+photo+'" alt="'+name+'" loading="lazy" decoding="async"></div>'+
 '<div class="body"><div class="store">Mercado Livre</div><h3 class="name">'+name+'</h3>'+
 (discount?'<div class="old-price">'+money(previous)+'</div>':'')+
 '<div class="price">'+money(price)+'</div><a class="buy" href="'+href+'" target="_blank" rel="nofollow sponsored noopener noreferrer">Ver oferta</a></div></article>';
}).join("\n");
if(!document.querySelector(".offer-nov2026"))grid.insertAdjacentHTML("beforeend",productsHTML);
const tabs=document.querySelector(".tabs");
if(tabs){for(const [category,label] of [["moda","Moda e calçados"],["moveis","Móveis e escritório"],["games","Games"]]){
 if(!tabs.querySelector('[data-filter="'+category+'"]')){const b=document.createElement("button");b.type="button";b.className="tab";b.dataset.filter=category;b.textContent=label;tabs.append(b)}
}}
const total=grid.querySelectorAll(".card").length;
const count=document.querySelector("#count");if(count)count.textContent=total+" produtos";
const styles=document.createElement("style");styles.id="styles-ofertas-20261102";styles.textContent=`
.card[hidden]{display:none!important}
.grid{grid-template-columns:repeat(4,minmax(0,1fr))}
.grid .card{min-width:0;max-width:100%;display:flex;flex-direction:column}
.grid .card .body{flex:1;min-width:0;display:flex;flex-direction:column}
.grid .card .name{min-height:0;overflow-wrap:anywhere;hyphens:auto}
.grid .card .buy{min-height:44px;display:grid;place-items:center;margin-top:auto}
.grid .card .old-price{font-size:.8rem;color:#758099;text-decoration:line-through;margin-bottom:4px}
.grid .card .price{font-variant-numeric:tabular-nums;overflow-wrap:anywhere}
.grid .card .photo{min-width:0}
.grid .card .photo img{max-width:100%;min-width:0;object-fit:contain}
.grid .card .badge{max-width:calc(100% - 18px);white-space:normal;line-height:1.2}
@media(max-width:900px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:560px){
 .bar{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;padding:10px 12px}
 .identity,.brand{min-width:0;overflow-wrap:anywhere}
 .search{margin:0;width:100%;max-width:none;min-width:0}
 .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
 .grid .card .name{font-size:.79rem;line-height:1.3}
 .grid .card .price{font-size:clamp(.94rem,4.1vw,1.22rem);letter-spacing:-.025em}
 .grid .card .badge{font-size:.58rem}
 .hero,.slides{min-height:610px}
 .slide{min-width:0;grid-template-columns:minmax(0,1fr);gap:12px}
 .slide h1{font-size:clamp(1.7rem,7.5vw,2.3rem);overflow-wrap:anywhere}
 .slide-copy,.hero-product{min-width:0;max-width:100%}
}
@media(max-width:350px){.grid{gap:7px}.grid .card .body{padding:8px}.grid .card .price{font-size:.95rem}.grid .card .buy{font-size:.68rem}}
`;document.head.append(styles);
// Show a user-friendly placeholder if the marketplace temporarily fails to serve an image.
const fallBackImage="data:image/svg+xml;charset=utf-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="600" height="600" fill="#f3f7ff"/><text x="300" y="295" text-anchor="middle" font-family="Arial" font-size="27" fill="#65738f">Imagem indisponível</text><text x="300" y="338" text-anchor="middle" font-family="Arial" font-size="19" fill="#65738f">Ver produto no Mercado Livre</text></svg>');
grid.querySelectorAll(".offer-nov2026 .photo").forEach(photo=>{
const img=photo.querySelector("img");
let fallbackStage=0;
img.addEventListener("error",()=>{
 if(fallbackStage===0 && img.src.includes("http2.mlstatic.com/D_Q_NP_")){fallbackStage=1;img.src=img.src.replace("/D_Q_NP_","/D_NQ_NP_");photo.dataset.gallery=img.src;return}
 fallbackStage=2;img.src=fallBackImage;photo.dataset.gallery=fallBackImage;
});
photo.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();photo.click()}});
});
})();