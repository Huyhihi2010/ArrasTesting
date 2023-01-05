const bodyHtml = document.querySelector('body');
const headHtml = document.querySelector('head');

const _get_ = document.createElement('div');
_get_.id = '_get_';
// document.getElementById('creating-ui').appendChild(_get_);
bodyHtml.appendChild(_get_);

const get_receive = document.createElement('div');
const get_notify = document.createElement('div');
get_receive.id = 'get-receive';
get_notify.id = 'get-notify';
_get_.appendChild(get_receive);
_get_.appendChild(get_notify);

const styleUi = document.createElement('style');
styleUi.innerHTML = `
#_get_{
    width: 100%;
}

#get-receive{
    box-sizing: border-box;
    outline: none;
}

#receive-frame{
    position: fixed;
    user-select: none;
    width: 100%;
    text-align: center;
    animation-name: showReceiveFrame;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}
@keyframes showReceiveFrame {
    0% {top: -100px;}
    100% {top: 5px;}
}
.m{
    border-radius: 5px;
    background-color: rgb(0, 0, 0, 0.433);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveM;
    animation-delay: 10s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveM {
    0% {background-color: rgb(0, 0, 0, 0.433); color: white;}
    100% {background-color: rgb(0, 0, 0, 0); color: rgb(255, 255, 255, 0);}
}

.f{
    border-radius: 5px;
    background-color: rgb(255, 0, 0, 0.433);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveF;
    animation-delay: 0.5s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveF {
    0% {background-color: rgb(255, 0, 0, 0.433); color: white;}
    100% {background-color: rgb(255, 0, 0, 0); color: rgb(255, 255, 255, 0);}
}

.a{
    border-radius: 5px;
    background-color: rgb(255, 0, 0, 0.433);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveA;
    animation-delay: 4s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveA {
    0% {background-color: rgb(255, 0, 0, 0.433); color: white;}
    100% {background-color: rgb(255, 0, 0, 0); color: rgb(255, 255, 255, 0);}
}

.f{
    border-radius: 5px;
    background-color: rgb(255, 0, 0, 0.433);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveF;
    animation-delay: 0.5s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveF {
    0% {background-color: rgb(255, 0, 0, 0.433); color: white;}
    100% {background-color: rgb(255, 0, 0, 0); color: rgb(255, 255, 255, 0);}
}

.o{
    border-radius: 5px;
    background-color: rgba(47, 47, 255, 0.486);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveO;
    animation-delay: 1s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveO {
    0% {background-color: rgba(47, 47, 255, 0.486); color: white;}
    100% {background-color: rgba(47, 47, 255, 0); color: rgb(255, 255, 255, 0);}
}

.r{
    border-radius: 5px;
    background-color: rgb(255, 0, 0, 0.433);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveR;
    animation-delay: 4s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveR {
    0% {background-color: rgb(255, 0, 0, 0.433); color: white;}
    100% {background-color: rgb(255, 0, 0, 0); color: rgb(255, 255, 255, 0);}
}

.b{
    border-radius: 5px;
    background-color: rgb(0, 162, 255, 0.433);
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: lighter;
    animation-name: HideReceiveB;
    animation-delay: 4s;
    animation-duration: 0.5s;
    animation-fill-mode: both;
}

@keyframes HideReceiveB {
    0% {background-color: rgb(0, 162, 255); color: white;}
    100% {background-color: rgb(0, 162, 255, 0); color: rgb(255, 255, 255, 0);}
}

#notify-frame{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    transition: 1s;
}

`;

headHtml.appendChild(styleUi);

export var get = {
    receive: function(type, txt) {
        const receive = document.createElement('div');
        receive.id = 'receive-frame';
        receive.innerHTML = `
        <span class="${type}">${txt}</span>
        `;
        if(type == 'm') {
            setTimeout(() => {
                receive.remove();
            }, 10500)
        }
        if(type == 'a') {
            setTimeout(() => {
                receive.remove();
            }, 4500)
        }
        if(type == 'r') {
            setTimeout(() => {
                receive.remove();
            }, 4500)
        }
        if(type == 'b') {
            setTimeout(() => {
                receive.remove();
            }, 4500)
        }
        if(type == 'f') {
            setTimeout(() => {
                receive.remove();
            }, 1000)
        }
        if(type == 'o') {
            setTimeout(() => {
                receive.remove();
            }, 1500)
        }
        return get_receive.appendChild(receive);
    },
}