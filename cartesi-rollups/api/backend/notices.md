---
id: notices
title: Notices
---

A notice is a verifiable data declaration that attests to off-chain events or conditions and is accompanied by proof.

Notices provide a mechanism to communicate essential off-chain events in the execution layer to the base layer in a verifiable manner.

Consider a scenario within a gaming dApp where players engage in battles. Upon the conclusion of a match, the dApp's backend generates a notice proclaiming the victorious player. This notice contains pertinent off-chain data regarding the match outcome. Once created, the notice is submitted to the rollup server, which stands as evidence of the off-chain event.

Crucially, the base layer conducts on-chain validation of these notices through the [`validateOutput()`](../json-rpc/application.md/#validateoutput) function of the `Application` contract.

This validation process ensures the integrity and authenticity of the submitted notices, enabling the blockchain to verify and authenticate the declared off-chain events or conditions.

Let's see how a Cartesi dApp's **Advance** request sends an output to the rollup server as a notice:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="JavaScript" label="JavaScript" default>
<pre><code>

```javascript

async function handle_advance(data) {
  console.log("Received advance request data " + JSON.stringify(data));

  const inputPayload = data["payload"];

  try {
    await fetch(rollup_server + "/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: inputPayload }),
    });
  } catch (error) {
    // do something when there is an error
  }

  return "accept";
}
```

</code></pre>
</TabItem>

<TabItem value="Python" label="Python" default>
<pre><code>

```python

def handle_advance(data):
   logger.info(f"Received advance request data {data}")

   status = "accept"
   try:
       inputPayload = data["payload"]
       ## send the inputPayload as a notice
       response = requests.post(
           rollup_server + "/notice", json={"payload": inputPayload}
       )
       logger.info(
           f"Received notice status {response.status_code} body {response.content}"
       )
   except Exception as e:
       #  Emits report with error message here
   return status

```

</code></pre>
</TabItem>

</Tabs>



:::note
Frontend clients can query notices using a GraphQL API exposed by the Cartesi Nodes. [Refer to the documentation here](../../development/retrieve-outputs.md#query-all-notices) to query notices from the rollup server. 
:::