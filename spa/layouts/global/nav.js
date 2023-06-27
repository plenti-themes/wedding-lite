import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,detach,element,init,insert_hydration,noop,safe_not_equal,space,text}from"../../web_modules/svelte/internal/index.mjs";function create_fragment(){let s,b,o,n,O,B,I,w,H,_,L,N,i,t,p,l,T,A,j,d,x,k,y,h,C,E,v,a,S,M,g,r,z,D,m,u,R,P,f,c,F;return{c(){s=element("div"),b=element("nav"),o=element("div"),n=element("a"),O=element("span"),B=text("Bratt"),I=space(),w=element("i"),H=space(),_=element("span"),L=text("Jolie"),N=space(),i=element("div"),t=element("ul"),p=element("li"),l=element("a"),T=text("The Couple"),A=space(),j=element("li"),d=element("a"),x=text("Our Story"),k=space(),y=element("li"),h=element("a"),C=text("The Wedding"),E=space(),v=element("li"),a=element("a"),S=text("People"),M=space(),g=element("li"),r=element("a"),z=text("Gallery"),D=space(),m=element("li"),u=element("a"),R=text("Rsvp"),P=space(),f=element("li"),c=element("a"),F=text("Contact Us"),this.h()},l(e){s=claim_element(e,"DIV",{id:!0,class:!0});var V,$,W,U,K,q,Y,G,X,Q,Z,J,le=children(s),ee,te,ne,se,oe,ie,ae,re,ce;b=claim_element(le,"NAV",{class:!0}),G=children(b),o=claim_element(G,"DIV",{class:!0}),W=children(o),n=claim_element(W,"A",{href:!0,class:!0}),$=children(n),O=claim_element($,"SPAN",{}),K=children(O),B=claim_text(K,"Bratt"),K.forEach(detach),I=claim_space($),w=claim_element($,"I",{class:!0}),children(w).forEach(detach),H=claim_space($),_=claim_element($,"SPAN",{}),q=children(_),L=claim_text(q,"Jolie"),q.forEach(detach),$.forEach(detach),N=claim_space(W),i=claim_element(W,"DIV",{class:!0,id:!0}),Y=children(i),t=claim_element(Y,"UL",{class:!0}),V=children(t),p=claim_element(V,"LI",{class:!0}),X=children(p),l=claim_element(X,"A",{href:!0,class:!0}),Q=children(l),T=claim_text(Q,"The Couple"),Q.forEach(detach),X.forEach(detach),A=claim_space(V),j=claim_element(V,"LI",{class:!0}),Z=children(j),d=claim_element(Z,"A",{href:!0,class:!0}),J=children(d),x=claim_text(J,"Our Story"),J.forEach(detach),Z.forEach(detach),k=claim_space(V),y=claim_element(V,"LI",{class:!0}),ee=children(y),h=claim_element(ee,"A",{href:!0,class:!0}),te=children(h),C=claim_text(te,"The Wedding"),te.forEach(detach),ee.forEach(detach),E=claim_space(V),v=claim_element(V,"LI",{class:!0}),ne=children(v),a=claim_element(ne,"A",{href:!0,class:!0}),se=children(a),S=claim_text(se,"People"),se.forEach(detach),ne.forEach(detach),M=claim_space(V),g=claim_element(V,"LI",{class:!0}),oe=children(g),r=claim_element(oe,"A",{href:!0,class:!0}),ie=children(r),z=claim_text(ie,"Gallery"),ie.forEach(detach),oe.forEach(detach),D=claim_space(V),m=claim_element(V,"LI",{class:!0}),ae=children(m),u=claim_element(ae,"A",{href:!0,class:!0}),re=children(u),R=claim_text(re,"Rsvp"),re.forEach(detach),ae.forEach(detach),P=claim_space(V),f=claim_element(V,"LI",{class:!0}),ce=children(f),c=claim_element(ce,"A",{href:!0,class:!0}),U=children(c),F=claim_text(U,"Contact Us"),U.forEach(detach),ce.forEach(detach),V.forEach(detach),Y.forEach(detach),W.forEach(detach),G.forEach(detach),le.forEach(detach),this.h()},h(){attr(w,"class","bi-heart brand-icon"),attr(n,"href","#section_0"),attr(n,"class","navbar-brand svelte-ktl66x"),attr(l,"href","#section_1"),attr(l,"class","svelte-ktl66x"),attr(p,"class","nav-item svelte-ktl66x"),attr(d,"href","#section_2"),attr(d,"class","svelte-ktl66x"),attr(j,"class","nav-item svelte-ktl66x"),attr(h,"href","#section_3"),attr(h,"class","svelte-ktl66x"),attr(y,"class","nav-item svelte-ktl66x"),attr(a,"href","#section_4"),attr(a,"class","svelte-ktl66x"),attr(v,"class","nav-item svelte-ktl66x"),attr(r,"href","#section_5"),attr(r,"class","svelte-ktl66x"),attr(g,"class","nav-item svelte-ktl66x"),attr(u,"href","#section_6"),attr(u,"class","svelte-ktl66x"),attr(m,"class","nav-item svelte-ktl66x"),attr(c,"href","#section_7"),attr(c,"class","svelte-ktl66x"),attr(f,"class","nav-item svelte-ktl66x"),attr(t,"class","navbar-nav ms-auto svelte-ktl66x"),attr(i,"class","collapse navbar-collapse svelte-ktl66x"),attr(i,"id","navbarNav"),attr(o,"class","container svelte-ktl66x"),attr(b,"class","navbar svelte-ktl66x"),attr(s,"id","sticky-wrapper"),attr(s,"class","sticky-wrapper svelte-ktl66x")},m(e,V){insert_hydration(e,s,V),append_hydration(s,b),append_hydration(b,o),append_hydration(o,n),append_hydration(n,O),append_hydration(O,B),append_hydration(n,I),append_hydration(n,w),append_hydration(n,H),append_hydration(n,_),append_hydration(_,L),append_hydration(o,N),append_hydration(o,i),append_hydration(i,t),append_hydration(t,p),append_hydration(p,l),append_hydration(l,T),append_hydration(t,A),append_hydration(t,j),append_hydration(j,d),append_hydration(d,x),append_hydration(t,k),append_hydration(t,y),append_hydration(y,h),append_hydration(h,C),append_hydration(t,E),append_hydration(t,v),append_hydration(v,a),append_hydration(a,S),append_hydration(t,M),append_hydration(t,g),append_hydration(g,r),append_hydration(r,z),append_hydration(t,D),append_hydration(t,m),append_hydration(m,u),append_hydration(u,R),append_hydration(t,P),append_hydration(t,f),append_hydration(f,c),append_hydration(c,F)},p:noop,i:noop,o:noop,d(e){e&&detach(s)}}}class Component extends SvelteComponent{constructor(e){super(),init(this,e,null,create_fragment,safe_not_equal,{})}}export default Component