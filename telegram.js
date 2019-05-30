"use strict";

const Telegram = require("telegram-node-bot");
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram(
  "592844526:AAFV_ljxoDRaDoTfN95gNpbXpEetjR8wzXc"
);

class PingController extends TelegramBaseController {
  /**
   * @param {Scope} $
   */
  pingHandler($) {
    $.sendMessage("Test");
  }

  get routes() {
    return {
      pingCommand: "pingHandler"
    };
  }
}

class StartConstoller extends TelegramBaseController {
  /**
   * @param {Scope} $
   */
  start($) {
    $.sendMessage("Hello!");
  }

  get routes() {
    return {
      startHandler: "start"
    };
  }
}

tg.router
  .when(new TextCommand("ping", "pingCommand"), new PingController())
  .when(new TextCommand("/start", "startHandler"), new StartConstoller());
