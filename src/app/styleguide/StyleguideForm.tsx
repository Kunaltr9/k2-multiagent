"use client";

import { Button } from "@/components/ui/Button";
import { FormField, Input, Textarea, Select } from "@/components/ui/FormField";

export function StyleguideForm() {
  return (
    <form
      className="max-w-[520px] flex flex-col gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <FormField label="Full name" htmlFor="sg-name" required>
        <Input id="sg-name" type="text" placeholder="Jane Smith" />
      </FormField>

      <FormField
        label="Email address"
        htmlFor="sg-email"
        required
        hint="We will not share this with anyone."
      >
        <Input id="sg-email" type="email" placeholder="jane@company.com" />
      </FormField>

      <FormField
        label="Email — error state"
        htmlFor="sg-email-err"
        error="Enter a valid email address."
      >
        <Input
          id="sg-email-err"
          type="email"
          defaultValue="not-an-email"
          hasError
        />
      </FormField>

      <FormField label="Business function" htmlFor="sg-function">
        <Select id="sg-function" defaultValue="">
          <option value="" disabled>Select a function</option>
          <option value="support">Customer Support</option>
          <option value="ops">Operations</option>
          <option value="revenue">Revenue &amp; Sales</option>
          <option value="knowledge">Knowledge &amp; Search</option>
          <option value="internal">Internal Tools</option>
        </Select>
      </FormField>

      <FormField label="Tell us about the workflow" htmlFor="sg-message">
        <Textarea
          id="sg-message"
          placeholder="Describe what the workflow looks like today and what outcome you want."
          rows={5}
        />
      </FormField>

      <div className="flex gap-4 pt-2">
        <Button type="submit" variant="primary">Submit</Button>
        <Button type="reset" variant="secondary">Reset</Button>
      </div>
    </form>
  );
}
