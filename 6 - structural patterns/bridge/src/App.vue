<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {SimpleMailSender} from "@/services/Mail/MailSenders/SimpleMailSender";
import {SwiftMailSender} from "@/services/Mail/MailSenders/SwiftMailSender";
import {MailSender} from "@/services/Mail/MailSender";
import {HtmlMail} from "@/services/Mail/Mailables/HtmlMail";
import {TextMail} from "@/services/Mail/Mailables/TextMail";

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    let firstMail = this.getRandomMail('first from', 'fist to', 'first content');
    let firstSender = this.getRandomMailerSenderFor(firstMail);

    firstSender.send();

    let secondMail = this.getRandomMail('second from', 'second to', 'second content');
    let secondSender = this.getRandomMailerSenderFor(secondMail);

    secondSender.send();

    let thirdMail = this.getRandomMail('third from', 'third to', 'third content');
    let thirdSender = this.getRandomMailerSenderFor(thirdMail);

    thirdSender.send();
  },
  computed: {},
  methods: {
    getRandomMail(from: string, to: string, content: string): Mail {
      const mails = [HtmlMail, TextMail];

      return new mails[Math.floor(Math.random() * mails.length)](from, to, content);
    },
    getRandomMailerSenderFor(mail: Mail): MailSender {
      const mailSenders = [SimpleMailSender, SwiftMailSender];

      return new mailSenders[Math.floor(Math.random() * mailSenders.length)](mail);
    }
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
