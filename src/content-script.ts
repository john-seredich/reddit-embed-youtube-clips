// Issue #1 - How to continually get more elements based on scroll location.

// Selecting "all" anchor links
const referLinksClassname: string = "_10wC0aXnrUKfdJ4Ssz-o14";
const referLinkElements = document.getElementsByClassName(referLinksClassname);

// Gets each refer anchor link url
const referAnchorElements = [...referLinkElements].map((element) => {
  return element.children[0].getAttribute("href");
});

console.log(referAnchorElements);

// Filter each link and only return Youtube Clip links
