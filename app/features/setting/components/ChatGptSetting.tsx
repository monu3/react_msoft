import React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";

const ChatGptSetting = () => {
  return (
    <div>
      <div className="flex justify-end gap-1 mr-2">
        <label htmlFor="enable-chatGpt-key">Enable ChatGPT key</label>
        <Switch id="enable-chatGpt-key" />
      </div>
      <form action="" id="chatgpt-settings">
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="chatgpt-key">Chat GPT Key</label>
            <Input name="chatgpt-key" id="chatgpt-key"/>
          </div>
          <div>
            <label htmlFor="chatgpt-model">Chat GPT Model Name</label>
            <Input name="chatgpt-model" id="chatgpt-model"/>
          </div>
        </div>
        <Button className="mt-2">Save Changes</Button>
      </form>
    </div>
  );
};

export default ChatGptSetting;
