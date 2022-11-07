let emailLinks = document.getElementById("email-links");
let input = document.getElementById('email-search');
let textOne = document.getElementById("text-email")

import { sortBtn } from './dom-loader';
import mailIconSrc from '../Images/mail-icon.png';
import slideBoxIconSrc from '../Images/slide-box-icon.png';
import clockIconSrc from '../Images/clock-icon.png';
import barIconSrc from '../Images/bar-icon.png';
import tagIconSrc from '../Images/tag-icon.png';
import trashIconSrc from '../Images/trash-icon.png';
import pdfIconSrc from '../Images/group-13.png';

import buttons from './buttons.json'
import data from './emaildata.json'

let sortValue = 0;

let emailFormat = (value) => {
  let newText = data.filter(function (item) {
    return item.id === value
  }).map(item => {
    return `    
    <div class="flex gap-3 ml-6 mt-5">
      <div class="px-4 py-5 rounded-full border-2 border-gray-400">
        <a href="javascript:void(0)" class="flex"><img src="${mailIconSrc}" class="w-7" /></a>
      </div>
      <div class="px-5 py-5 rounded-full border-2 border-gray-400">
        <a href="javascript:void(0)" class="flex"><img src="${slideBoxIconSrc}" class="w-5" /></a>
      </div>
      <div class="px-6 py-5 rounded-full border-2 border-gray-400">
        <a href="javascript:void(0)" class="flex"><img src="${clockIconSrc}" class="w-4" /></a>
      </div>
      <div class="px-5 py-5 rounded-full border-2 border-gray-400">
        <a href="javascript:void(0)" class="flex"><img src="${barIconSrc}" class="w-5 h-4" /></a>
      </div>
      <div class="px-5 py-5 rounded-full border-2 border-gray-400">
        <a href="javascript:void(0)" class="flex"><img src="${tagIconSrc}" class="w-5" /></a>
      </div>
      <div class="px-6 py-5 rounded-full border-2 border-gray-400">
        <a href="javascript:void(0)" class="flex" id="delete-email-${item.id}" ><img src="${trashIconSrc}" class="w-4" /></a>
      </div>
    </div>
    <div class="h-mid-screen-2 overflow-auto"> 
    <div class="mt-8 ml-6">
      <h2 class="text-slate-600 text-3xl font-light">${item.title}</h2>
      <div class="flex justify-between items-center pr-6">
       <div class="mt-8 flex gap-2">
        <img class="w-12 h-12 rounded-full" src="${item.profile}" />
        <div>
        <a href="javascript:void(0)> class="text-slate-600 text-xl">${item.username}</a>
          <p class="text-slate-500 text-sm font-semibold">
            From: <span><a href="javascript:void(0) class="text-slate-700>${item.email}</a></span>
          </p>
        </div>
       </div>
       <p class="text-slate-800 opacity-30 text-sm">${item.time}</p>
      </div>
    </div>
    <div class="mt-8 ml-6">
      <p class="text-md text-slate-900/70">Hello Ben Affleck</p>
      <p class="text-md text-slate-900/70 mt-6 w-144 break-words leading-8">
      ${item.text}
        </p>
      <p class="text-md text-slate-600 mt-8">Cheers</p>
    </div>

    <div class="mt-8 mx-8 gap-2 p-3 rounded-lg border-2 border-gray-200 w-40 ${item.attachment ? "flex" : "hidden"}">
     <img src="${pdfIconSrc}" />
      <p class="self-end text-slate-800 opacity-50 text-xs">Sample.pdf</p>
    </div>
    <div class="flex gap-5 mt-8 mx-8">
      <button
      class="px-10 py-4 rounded-full bg-green-600 text-white flex items-center"
    >
    <i class="fa-sharp fa-solid fa-reply mr-2"></i>
      Reply
    </button>
    <button
    class="px-10 py-4 rounded-full bg-gray-100 text-slate-400 flex items-center"
  >
  <i class="fa-solid fa-share mr-2"></i>
    Forward
  </button>
    </div>
    </div>`
  })


  textOne.innerHTML = newText

}

let buttonElements = () => {
  let sortedArray = [...buttons]

  let sorted = sortValue !== 0 ? sortedArray.filter((item) => {
    if (sortValue === 1) {
      return item.read === 2
    }
    else {
      return item.read === 1
    }
  }) : buttons;


  let showButtons = sorted.map(btn => {
    return (
      `
            <div class="flex justify-between px-8 py-5 bg-gray-100/50 hover:bg-white cursor-pointer relative" id="item-${btn.id}">
            <span class="w-1 h-24  ${btn.active === "inactive" ? 'display:none' : 'bg-blue-500/80'} absolute left-0 top-0"></span>
            <div class="flex items-baseline gap-1 relative">
            <span class="inline-block absolute top-2 -left-4 w-2 h-2 rounded-full bg-blue-600 mr-1 ${btn.read === 1 ? "hidden" : "inline-block"}"></span>
            <div>
            <button id="btn-${btn.id}" class="font-bold text-slate-700">${btn.title}</button>
            <p class="text-sm text-gray-400 mt-3 font-semibold">${btn.source}</p>
            </div>
            </div>
            <div class="flex flex-col justify-between">
            <p class="text-slate-700 text-sm mt-1 ">${btn.time}</p>
            ${btn.attachments}
            </div>
            </div>
            `
    )
  }).join("")
  emailLinks.innerHTML = showButtons;


  for (let i = 0; i < buttons.length; i++) {
    let btns = document.getElementById(`item-${i}`);
    if (btns !== null) {
      btns.addEventListener("click", function () {
        setItem(i)
        emailFormat(i)
      })
    }

  }
}

let setItem = (value) => {
  let setActive = buttons.map(btn => {
    if (btn.id === value) {
      if (btn.active === "inactive") {
        return { ...btn, read: 1, active: "active" };
      }
      else {
        return { ...btn, read: 1, active: "inactive" }
      }
    }
    return { ...btn, active: "inactive" };
  })
  buttons = setActive
  buttonElements()
}

buttonElements()

function search_email() {
  input.value = input.value.toLowerCase();

  let btns = [];
  let items = []
  for (let i = 0; i < buttons.length; i++) {
    btns.push(document.getElementById(`btn-${i}`));
    items.push(document.getElementById(`item-${i}`));
  }
  for (let i = 0; i < items.length; i++) {
    if (!btns[i].innerText.toLowerCase().includes(input.value)) {
      items[i].style.display = "none";
    }
    else {
      items[i].style.display = "flex";
    }
  }
}

input.addEventListener("keyup", function () {
  search_email()
})

sortBtn.addEventListener("change", function () {
  sortValue = Number(sortBtn.value);
  buttonElements()
})


emailFormat(0)