function showPage(pageId){
document.querySelectorAll('.page-section').forEach(el=>el.classList.remove('active'));
document.querySelectorAll('.nav-item').forEach(el=>el.classList.remove('active'));
const target=document.getElementById('page-'+pageId);
if(target)target.classList.add('active');
const navItem=document.querySelector(`.nav-item[data-page="${pageId}"]`);
if(navItem)navItem.classList.add('active');
}
function toggleSidebar(){
document.getElementById('sidebar').classList.toggle('open');
}
function switchTab(el,tabId){
document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
document.querySelectorAll('.tab-content').forEach(tc=>tc.classList.remove('active'));
el.classList.add('active');
const target=document.getElementById(tabId);
if(target)target.classList.add('active');
}
function sendMessage(){
const input=document.getElementById('chatInput');
const msg=input.value.trim();
if(!msg)return;
const chat=document.getElementById('chatMessages');
const div=document.createElement('div');
div.className='message sent';
div.innerHTML=`<div class="avatar-circle" style="background:var(--c7);width:32px;height:32px;font-size:.75rem;flex-shrink:0">AD</div><div><div class="message-bubble">${msg}</div><div class="message-time">Ahora</div></div>`;
chat.appendChild(div);
input.value='';
chat.scrollTop=chat.scrollHeight;
}
function openTicketDetail(id){
document.getElementById('detail-ticket-id').textContent='#'+id;
showPage('ticket-detail');
}