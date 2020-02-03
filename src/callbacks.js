export function loadScript(src,callBack) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
    script.onload=() => callBack( script)
    script.onerror=() => callBack(new Error("Erorr>>"),`error`)
}