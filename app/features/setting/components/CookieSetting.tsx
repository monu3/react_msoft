import React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Switch } from "~/components/ui/switch";
import { Textarea } from "~/components/ui/textarea";

const CookieSetting = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-end gap-1 mr-2">
        <label htmlFor="enable-cookie">Enable Cookie</label>
        <Switch id="enable-cookie" />
      </div>
      <form action="">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
          <div className="flex flex-col gap-2">
            <div>
              <Switch id="enable-logging" />
              <label htmlFor="enable-logging" className="ml-2">
                Enable Logging
              </label>
            </div>
            <div>
              <label htmlFor="cookie-title">Cookie Title</label>
              <Input type="text" name="cookie-title" id="cookie-title" />
            </div>
            <div>
              <label htmlFor="cookie-description">Cookie Description</label>
              <Textarea name="cookie-description" id="cookie-description" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <Switch id="stictly-necessary-cookie" />
              <label htmlFor="stictly-necessary-cookie" className="ml-2">
                Strictly Necessary Cookie
              </label>
            </div>
            <div>
              <label htmlFor="strictly-cookie-title">
                Strictly Cookie Title
              </label>
              <Input
                type="text"
                name="strictly-cookie-title"
                id="stictly-cookie-title"
              />
            </div>
            <div>
              <label htmlFor="cookie-description">Cookie Description</label>
              <Textarea name="cookie-description" id="cookie-description" />
            </div>
          </div>
        </div>
        <h3>More Information</h3>
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
              <label htmlFor="strictly-cookie-title">
                Strictly Cookie Title
              </label>
              <Input
                type="text"
                name="strictly-cookie-title"
                id="stictly-cookie-title"
              />
            </div>
            <div>
              <label htmlFor="strictly-cookie-title">
                Strictly Cookie Title
              </label>
              <Input
                type="text"
                name="strictly-cookie-title"
                id="stictly-cookie-title"
              />
            </div>
          </div>
          <div className="mt-4">
          <Button>Save</Button>
          </div>
      </form>
    </div>
  );
};

export default CookieSetting;
