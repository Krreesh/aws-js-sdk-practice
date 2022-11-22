import { EC2Client, CreateVolumeCommand, DeleteVolumeCommand, CreateKeyPairCommand } from "@aws-sdk/client-ec2";

// Creates volume
// const params = {
//     "AvailabilityZone": 'us-east-1a',
//     "VolumeType": 'gp2',
//     "Size": 2
// }

// const command = new CreateVolumeCommand(params)
// try {
//     const data = await client.send(command)
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }

// Deletes volume
(async() =>{
        const client = new EC2Client({ region: "us-east-1"})
        const params = {
            VolumeId: 'vol-0dcc98b05c1f825d2'
        }
        const command = new DeleteVolumeCommand(params)
        try {
            const data = await client.send(command)
            console.log(data)
        } catch (e) {
            console.log(e)
        }
})()