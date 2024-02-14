import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CustomerOrdersTable = () => {
  return (
    <>
      <thead className="bg-[#E4E4E4]">
        <tr>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Order Id
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Product
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Cost</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Quantity
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">Tax</th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Total(kes)
          </th>
          <th className="font-semibold text-[15px] text-left p-[3px]">
            Status
          </th>

          <th className="font-semibold text-[15px] text-left p-[3px]">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">45,000</td>
          <td className="text-left p-[3px]">11</td>
          <td className="text-left p-[3px]">16%</td>
          <td className="text-left p-[3px]">350,000</td>
          <td className="text-left p-[3px] flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <p className="ml-[2px]">On the way</p>
          </td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Dialog>
                  <DialogTrigger>
                    <button className="mb-[1px] text-[14px] font-medium">
                      Progress
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        You can update the customer order status
                      </DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-[100%] mt-4">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="delivered">
                                Delivered
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                              <SelectItem value="onway">On way</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <button className="mt-3 py-2  px-3 text-white rounded-md bg-[#283593]">
                          Update
                        </button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button className="text-[14px] text-red-500">Delete</button>
              </PopoverContent>
            </Popover>
          </td>
        </tr>
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">45,000</td>
          <td className="text-left p-[3px]">11</td>
          <td className="text-left p-[3px]">16%</td>
          <td className="text-left p-[3px]">350,000</td>
          <td className="text-left p-[3px] flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <p className="ml-[2px]">On the way</p>
          </td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Dialog>
                  <DialogTrigger>
                    <button className="mb-[1px] text-[14px] font-medium">
                      Progress
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        You can update the customer order status
                      </DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-[100%] mt-4">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="delivered">
                                Delivered
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                              <SelectItem value="onway">On way</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <button className="mt-3 py-2  px-3 text-white rounded-md bg-[#283593]">
                          Update
                        </button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button className="text-[14px] text-red-500">Delete</button>
              </PopoverContent>
            </Popover>
          </td>
        </tr>
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">45,000</td>
          <td className="text-left p-[3px]">11</td>
          <td className="text-left p-[3px]">16%</td>
          <td className="text-left p-[3px]">350,000</td>
          <td className="text-left p-[3px] flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <p className="ml-[2px]">On the way</p>
          </td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Dialog>
                  <DialogTrigger>
                    <button className="mb-[1px] text-[14px] font-medium">
                      Progress
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        You can update the customer order status
                      </DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-[100%] mt-4">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="delivered">
                                Delivered
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                              <SelectItem value="onway">On way</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <button className="mt-3 py-2  px-3 text-white rounded-md bg-[#283593]">
                          Update
                        </button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button className="text-[14px] text-red-500">Delete</button>
              </PopoverContent>
            </Popover>
          </td>
        </tr>
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">45,000</td>
          <td className="text-left p-[3px]">11</td>
          <td className="text-left p-[3px]">16%</td>
          <td className="text-left p-[3px]">350,000</td>
          <td className="text-left p-[3px] flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <p className="ml-[2px]">On the way</p>
          </td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Dialog>
                  <DialogTrigger>
                    <button className="mb-[1px] text-[14px] font-medium">
                      Progress
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        You can update the customer order status
                      </DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-[100%] mt-4">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="delivered">
                                Delivered
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                              <SelectItem value="onway">On way</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <button className="mt-3 py-2  px-3 text-white rounded-md bg-[#283593]">
                          Update
                        </button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button className="text-[14px] text-red-500">Delete</button>
              </PopoverContent>
            </Popover>
          </td>
        </tr>
        <tr>
          <td className="text-left p-[3px]">2858</td>
          <td className="text-left p-[3px]">Richard Valdez</td>
          <td className="text-left p-[3px]">45,000</td>
          <td className="text-left p-[3px]">11</td>
          <td className="text-left p-[3px]">16%</td>
          <td className="text-left p-[3px]">350,000</td>
          <td className="text-left p-[3px] flex items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <p className="ml-[2px]">On the way</p>
          </td>
          <td className="text-left p-[3px]">
            <Popover>
              <PopoverTrigger>
                <p>...</p>
              </PopoverTrigger>
              <PopoverContent className="flex flex-col items-center w-[100px] bg-[#D3D3D3] ">
                <Dialog>
                  <DialogTrigger>
                    <button className="mb-[1px] text-[14px] font-medium">
                      Progress
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        You can update the customer order status
                      </DialogTitle>
                      <DialogDescription>
                        <Select>
                          <SelectTrigger className="w-[100%] mt-4">
                            <SelectValue placeholder="Select a status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Status</SelectLabel>
                              <SelectItem value="delivered">
                                Delivered
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                              <SelectItem value="onway">On way</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <button className="mt-3 py-2  px-3 text-white rounded-md bg-[#283593]">
                          Update
                        </button>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <button className="text-[14px] text-red-500">Delete</button>
              </PopoverContent>
            </Popover>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CustomerOrdersTable;
