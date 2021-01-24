const presence = new Presence({
  clientId: "798312419260104705" // CLIENT ID FOR YOUR PRESENCE
});

let user: any, search: any, title: any;

const browsingStamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "perp"
  };

  presenceData.startTimestamp = browsingStamp;
  if (document.location.hostname == "perpheads.com") {
    title = document.querySelector(
      "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
    );
  }
  if (document.location.pathname.includes("/threads/")) {
    title = document.querySelector(
      "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
    );
    if (title != null) {
      title = document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      );
      search = document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      );
      title = title.innerText.replace(search.inner);
      presenceData.details = "Forums, viewing thread:";
      presenceData.state = title;

      delete presenceData.smallImageKey;
      presence.setActivity(presenceData);
    } else {
      presenceData.details = "Forums, Browsing...";
      delete presenceData.state;
      delete presenceData.smallImageKey;
      presence.setActivity(presenceData);
    }
  }  
  else if (document.location.pathname.includes("/forums/")) {
    title = document.querySelector(
      "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
    );
    if (title != null) {
      title = document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      );
      search = document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      );
      title = title.innerText.replace(search.inner);
      presenceData.details = "Forums, viewing category:";
      presenceData.state = title;

      delete presenceData.smallImageKey;
      presence.setActivity(presenceData);
    } else {
      presenceData.details = "Forums, Browsing...";
      delete presenceData.state;
      delete presenceData.smallImageKey;
      presence.setActivity(presenceData);
    }
  } else if (
    document.location.pathname.includes("/whats-new/") &&
    document.location.pathname.includes("/profile-posts/")
  ) {
    presenceData.details = "Forums, viewing the list of";
    presenceData.state = "latest profile posts";
    delete presenceData.smallImageKey;

    presence.setActivity(presenceData);
  } else if (
    document.location.pathname.includes("/whats-new/") &&
    document.location.pathname.includes("/posts/")
  ) {
    presenceData.details = "Forums, Viewing the list of";
    presenceData.state = "latest posts";

    delete presenceData.smallImageKey;

    presence.setActivity(presenceData);
  } else if (document.location.pathname.includes("/search/")) {
    search = document.querySelector(
      "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1 > a > em"
    );
    if (search != null) {
      presenceData.details = "Forums, searching for:";
      presenceData.state = search.innerText;

      presenceData.smallImageKey = "search";

      presence.setActivity(presenceData);
    }
  } else if (document.location.pathname.includes("members/")) {
    user = document.querySelector(
      "div.p-body-content > div.block > div.block-container > div.block-body > div.memberHeader > div.memberProfileBanner > div.memberHeader-mainContent > div.memberHeader-content > h1 > span > span > span > span"
    );
    presenceData.details = "Forums, viewing user:";
    presenceData.state = user.innerText;

    delete presenceData.smallImageKey;

    presence.setActivity(presenceData);
  } else if (document.location.pathname.includes("/account/")) {
    presenceData.details = "Forums, account settings";
    delete presenceData.state;

    delete presenceData.smallImageKey;

    presence.setActivity(presenceData);
  } else if (document.location.pathname.includes("/watched/")) {
    if (document.location.pathname.includes("/threads")) {
      presenceData.details = "Forums, Viewing their";
      presenceData.state = "watched threads";

      delete presenceData.smallImageKey;

      presence.setActivity(presenceData);
    } else {
      presenceData.details = "Forums, Viewing their";
      presenceData.state = "watched forums";

      delete presenceData.smallImageKey;

      presence.setActivity(presenceData);
    }
  } else if (document.location.pathname.includes("/conversations/")) {
    if (
      document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      ) != null
    ) {
      title = document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      );
      search = document.querySelector(
        "div.p-body > div.p-body-inner > div.p-body-header > div.p-title > h1"
      );
      title = title.innerText.replace(search.innerText, "").replace("»", "");
      presenceData.details = "Forums, Reading DM:";
      if (title.length > 128) {
        presenceData.state = title.substring(0, 125) + "...";
      } else {
        presenceData.state = title;
      }
      delete presenceData.smallImageKey;

      presence.setActivity(presenceData);
    } else {
      presenceData.details = "Forums, Browsing";
      presenceData.state = "through their DMs";

      delete presenceData.smallImageKey;

      presence.setActivity(presenceData);
    }
  } else if (document.location.hostname == "help.perpheads.com") {
    presenceData.details = "PERPHeads Help";
    delete presenceData.state;

    delete presenceData.smallImageKey;

    presence.setActivity(presenceData);
  } else if (
    document.location.pathname.includes("/pages/") &&
    document.location.pathname.includes("/donate/")
  ) {
    presenceData.details = "PERPHeads Donate";
    delete presenceData.state;

    delete presenceData.smallImageKey;

    presence.setActivity(presenceData);
  } else {
    presence.setActivity();
    presence.setTrayTitle();
  }
});
