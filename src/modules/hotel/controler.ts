import { Request, Response } from "express";
import { serviceResponse } from "../../helpers/responseHelper";
import { HotelExtraI, HotelI } from "../../interfaces/hotel.interface";
import { HotelService } from "./service";
import { PoliciesI } from "../../interfaces/policies.interface";

 export const createHotelController = async (req: Request, resp: Response) => {
  try {

    const { user_id,name,ruc,address,phone,web,country,city,stars,manager,detail} = req.body;
    const newFad={ user_id, name, ruc, address, phone, web, country, city, stars, manager,detail, doc: req.file?.path } as unknown as HotelI;

    const payload = req.body as unknown as HotelI;
    console.log("controlador",newFad);
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.save(newFad),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};

export const getAllHotelController = async (req: Request, resp: Response) => {
  try {
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getAll(),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}

export const getByIdHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getById(id),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}


export const getByIdUserHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getByIdUser(id),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}


export const verifyHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as HotelI;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.update(id, payload),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};

export const declineHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as HotelI;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.decline(id, payload),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};

export const commentDeclineHotelController = async (req: Request, resp: Response) => {
  try {
    const { comment} = req.body;
    const newComment={ comment } as unknown as HotelI;
    const id = req.params.id;
    const payload = req.body as HotelI;
    console.log("id",id);
    console.log("payload",newComment);
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.commentdecline(id, newComment),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};



export const getHotelNotVerifiedController = async (req: Request, resp: Response) => {
  try {
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getHotelNotVerified(),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}


export const getHotelVerifiedController = async (req: Request, resp: Response) => {
  try {
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getHotelVerified(),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}

export const getHotelsController = async (req: Request, resp: Response) => {
  try {
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getHotels(),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}


export const registerServicesHotelController = async (
  req: Request,
  resp: Response
) => {
  try {
    const id = req.params.id;
    const payload = req.body as HotelI;
  
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.updateServices(id, payload),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};


export const getByIdServicesHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getByIdServices(id),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}

export const updateHotelController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const { user_id,name,ruc,address,phone,web,country,city,stars,manager,detail,state} = req.body;
    const newHotel={ user_id,name, ruc, address, phone, web, country, city, stars, manager,detail,state, doc: req.file?.path } as unknown as HotelI;
    
    const payload = req.body as HotelI;
    console.log("id",id);
    console.log("newHotel",newHotel);
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.updateHotel(id,newHotel),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};


export const createPoliciesController = async (req: Request, resp: Response) => {
  try {

    const { hotel_id,policies} = req.body;
    const newFad={ hotel_id,policies} as unknown as PoliciesI;

    //const payload = req.body as unknown as HotelI;
    console.log("controlador",newFad);
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.savePolicies(newFad),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};

export const getByIdHotelPoliciesController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.getByIdPolicies(id),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
}

export const commentPoliciesHotelController = async (req: Request, resp: Response) => {
  try {
    const { comment,state} = req.body;
    const newComment={ comment,state } as unknown as PoliciesI;
    const id = req.params.id;
    const payload = req.body as HotelI;
    console.log("id",id);
    console.log("payload",newComment);
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.commentPolicies(id, newComment),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};


export const verifyPoliciesController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as PoliciesI;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.verifyPolicies(id, payload),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};

export const updatePoliciesHotelController = async (req: Request, resp: Response) => {
  try {
    const { hotel_id,policies} = req.body;
    const newFad={ policies} as unknown as PoliciesI;
    const id = req.params.id;
    const payload = req.body as PoliciesI;
    console.log("id",id);
    console.log("payload",newFad);
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.updatePoliciesHotel(id, newFad),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};


export const updateStateController = async (req: Request, resp: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body as HotelI;
    const hotelService = new HotelService();
    return serviceResponse({
      data: await hotelService.updateState(id, payload),
      res: resp,
      req: req,
    });
  } catch (error) {
    return serviceResponse({
      message: (error as any).message,
      res: resp,
      statusCode: 400,
      req: req,
    });
  }
};