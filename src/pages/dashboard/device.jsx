import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Typography,
    Switch,
    Tooltip,
    Button,
    Input,
  } from "@material-tailwind/react";
  import {
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/solid";
  import { useEffect, useState } from "react";
  
export function ConnectedDevices() {
    const [devices, setDevices] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDevices, setFilteredDevices] = useState(devices);
  
    useEffect(() => {
      const socket = new WebSocket("ws://localhost:3001");
  
      socket.onopen = () => {
        console.log("WebSocket connection established");
      };
  
      socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setDevices((prevDevices) => {
          const updatedDevices = [...prevDevices];
          const deviceIndex = updatedDevices.findIndex((d) => d.id === data.id);
          if (deviceIndex >= 0) {
            updatedDevices[deviceIndex] = data;
          } else {
            updatedDevices.push(data);
          }
          return updatedDevices;
        });
      };
  
      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };
  
      return () => {
        socket.close();
      };
    }, []);
  
    useEffect(() => {
      setFilteredDevices(
        devices.filter((device) =>
          device.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, devices]);
  
    return (
      <div className="mx-3 mt-14 mb-6 lg:mx-4 border border-blue-gray-100">
        <Card className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <Typography variant="h4" color="blue-gray">
              Connected Devices
            </Typography>
            <div className="flex items-center gap-4">
              <Input
                icon={<MagnifyingGlassIcon className="h-5 w-5 text-blue-gray-500" />}
                placeholder="Search Devices"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {filteredDevices.map((device) => (
              <Card key={device.id} color="transparent" shadow={false} className="border border-blue-gray-100">
                <CardHeader floated={false} className="mx-0 mt-0 mb-4 h-32 bg-blue-gray-100">
                  <Typography variant="h6" color="blue-gray" className="text-center pt-4">
                    {device.name}
                  </Typography>
                </CardHeader>
                <CardBody className="py-2 px-4">
                  <div className="flex justify-between mb-4">
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      ID: {device.id}
                    </Typography>
                    <Typography variant="small" className="font-normal text-blue-gray-500">
                      Status: {device.status ? "Online" : "Offline"}
                    </Typography>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <Typography variant="small" className="font-normal text-blue-gray-500">
                        Temperature:
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-700">
                        {device.temperature}°C
                      </Typography>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography variant="small" className="font-normal text-blue-gray-500">
                        Humidity:
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-700">
                        {device.humidity}%
                      </Typography>
                    </div>
                    <div className="flex items-center justify-between">
                      <Typography variant="small" className="font-normal text-blue-gray-500">
                        Soil Moisture:
                      </Typography>
                      <Typography variant="small" className="font-normal text-blue-gray-700">
                        {device.soilMoisture}%
                      </Typography>
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="mt-6 flex items-center justify-between py-0 px-4">
                  <Button variant="outlined" size="sm">
                    View Details
                  </Button>
                  <Tooltip content={device.status ? "Turn Off" : "Turn On"}>
                    <Switch defaultChecked={device.status} />
                  </Tooltip>
                </CardFooter>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  ConnectedDevices.displayName  = "/src/pages/dashboard/devices.jsx";

  export default ConnectedDevices;
  