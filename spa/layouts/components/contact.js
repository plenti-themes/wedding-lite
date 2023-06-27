import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[3]=t[n],s}function get_each_context_1(e,t,n){const s=e.slice();return s[6]=t[n],s}function create_if_block_1(e){let t,n=e[3].desc+"";return{c(){t=element("p")},l(e){t=claim_element(e,"P",{});var n=children(t);n.forEach(detach)},m(e,s){insert_hydration(e,t,s),t.innerHTML=n},p(e,s){s&2&&n!==(n=e[3].desc+"")&&(t.innerHTML=n)},d(e){e&&detach(t)}}}function create_if_block(e){let n,s=e[3].icons,t=[];for(let n=0;n<s.length;n+=1)t[n]=create_each_block_1(get_each_context_1(e,s,n));return{c(){n=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){n=claim_element(e,"UL",{class:!0});var s=children(n);for(let e=0;e<t.length;e+=1)t[e].l(s);s.forEach(detach),this.h()},h(){attr(n,"class","social-icon")},m(e,s){insert_hydration(e,n,s);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null)},p(e,o){if(o&2){s=e[3].icons;let i;for(i=0;i<s.length;i+=1){const a=get_each_context_1(e,s,i);t[i]?t[i].p(a,o):(t[i]=create_each_block_1(a),t[i].c(),t[i].m(n,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},d(e){e&&detach(n),destroy_each(t,e)}}}function create_each_block_1(e){let t,n,s,o,i;return{c(){t=element("li"),n=element("a"),i=space(),this.h()},l(e){t=claim_element(e,"LI",{class:!0});var s=children(t);n=claim_element(s,"A",{href:!0,class:!0}),children(n).forEach(detach),i=claim_space(s),s.forEach(detach),this.h()},h(){attr(n,"href",s=e[6].link),attr(n,"class",o="social-icon-link bi-"+e[6].name+" svelte-1yf7zmn"),attr(t,"class","social-icon-item svelte-1yf7zmn")},m(e,s){insert_hydration(e,t,s),append_hydration(t,n),append_hydration(t,i)},p(e,t){t&2&&s!==(s=e[6].link)&&attr(n,"href",s),t&2&&o!==(o="social-icon-link bi-"+e[6].name+" svelte-1yf7zmn")&&attr(n,"class",o)},d(e){e&&detach(t)}}}function create_each_block(e){let s,o,i=e[3].title+"",a,l,r,c,t=e[3]?.desc&&create_if_block_1(e),n=e[3]?.icons&&create_if_block(e);return{c(){s=element("div"),o=element("h4"),a=text(i),l=space(),t&&t.c(),r=space(),n&&n.c(),c=space(),this.h()},l(e){s=claim_element(e,"DIV",{class:!0});var u,d=children(s);o=claim_element(d,"H4",{}),u=children(o),a=claim_text(u,i),u.forEach(detach),l=claim_space(d),t&&t.l(d),r=claim_space(d),n&&n.l(d),c=claim_space(d),d.forEach(detach),this.h()},h(){attr(s,"class","item")},m(e,i){insert_hydration(e,s,i),append_hydration(s,o),append_hydration(o,a),append_hydration(s,l),t&&t.m(s,null),append_hydration(s,r),n&&n.m(s,null),append_hydration(s,c)},p(e,o){o&2&&i!==(i=e[3].title+"")&&set_data(a,i),e[3]?.desc?t?t.p(e,o):(t=create_if_block_1(e),t.c(),t.m(s,r)):t&&(t.d(1),t=null),e[3]?.icons?n?n.p(e,o):(n=create_if_block(e),n.c(),n.m(s,c)):n&&(n.d(1),n=null)},d(e){e&&detach(s),t&&t.d(),n&&n.d()}}}function create_fragment(e){let s,r,i,o,l,f,v,n,d,b,h,p,u,g,a,m,c=e[1],t=[];for(let n=0;n<c.length;n+=1)t[n]=create_each_block(get_each_context(e,c,n));return{c(){s=element("section"),r=element("div"),i=element("div"),o=element("div"),l=element("h2"),f=text(e[0]),v=space(),n=element("div"),d=element("span"),b=space(),h=element("i"),p=space(),u=element("span"),g=space(),a=element("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(c){s=claim_element(c,"SECTION",{class:!0,id:!0});var m,j,y,_,w,O,x=children(s);r=claim_element(x,"DIV",{class:!0}),w=children(r),i=claim_element(w,"DIV",{class:!0}),j=children(i),o=claim_element(j,"DIV",{class:!0}),y=children(o),l=claim_element(y,"H2",{class:!0}),O=children(l),f=claim_text(O,e[0]),O.forEach(detach),v=claim_space(y),n=claim_element(y,"DIV",{class:!0}),m=children(n),d=claim_element(m,"SPAN",{class:!0}),children(d).forEach(detach),b=claim_space(m),h=claim_element(m,"I",{class:!0}),children(h).forEach(detach),p=claim_space(m),u=claim_element(m,"SPAN",{class:!0}),children(u).forEach(detach),m.forEach(detach),y.forEach(detach),g=claim_space(j),a=claim_element(j,"DIV",{class:!0}),_=children(a);for(let e=0;e<t.length;e+=1)t[e].l(_);_.forEach(detach),j.forEach(detach),w.forEach(detach),x.forEach(detach),this.h()},h(){attr(l,"class","section-title"),attr(d,"class","section-title-line"),attr(h,"class","section-title-icon bi-heart-fill"),attr(u,"class","section-title-line"),attr(n,"class","section-title-bottom"),attr(o,"class","section-title-wrap"),attr(a,"class","items svelte-1yf7zmn"),attr(i,"class","row"),attr(r,"class","container"),attr(s,"class","contact-section section-bg section-padding"),attr(s,"id",m="section_"+e[2])},m(e,c){insert_hydration(e,s,c),append_hydration(s,r),append_hydration(r,i),append_hydration(i,o),append_hydration(o,l),append_hydration(l,f),append_hydration(o,v),append_hydration(o,n),append_hydration(n,d),append_hydration(n,b),append_hydration(n,h),append_hydration(n,p),append_hydration(n,u),append_hydration(i,g),append_hydration(i,a);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(a,null)},p(e,[n]){if(n&1&&set_data(f,e[0]),n&2){c=e[1];let s;for(s=0;s<c.length;s+=1){const o=get_each_context(e,c,s);t[s]?t[s].p(o,n):(t[s]=create_each_block(o),t[s].c(),t[s].m(a,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=c.length}n&4&&m!==(m="section_"+e[2])&&attr(s,"id",m)},i:noop,o:noop,d(e){e&&detach(s),destroy_each(t,e)}}}function instance(e,t,n){let{title:s,items:o,order:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"items"in e&&n(1,o=e.items),"order"in e&&n(2,i=e.order)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title:0,items:1,order:2})}}export default Component