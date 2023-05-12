const clickShareHandler = () => {
  let url = window.document.location.href;
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = url;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};

export default clickShareHandler;
