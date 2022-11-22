import { EC2Client, CreateVolumeCommand, DeleteVolumeCommand, CreateKeyPairCommand } from "@aws-sdk/client-ec2";

(async () => {
    const client = new EC2Client({region: 'us-east-1'})
    const params = {
        DryRun: true,
        KeyName: 'MyNVKey',
        KeyFormat: 'pem'
    }
    const command = new CreateKeyPairCommand(params)
    try {
        const resp = await client.send(command)
        console.log(resp)
    } catch(e) {
        console.error(e)
    }
}
)()
// const {EC2Client, CreateVolumeCommand } =  require("@aws-sdk/client-ec2")



// const response =  
// console.log(response)