export interface PostPropsType {
    restaurant_name: string;
    img: string;
    address: string;
    star: number;
    options: {
        takeout: boolean;
        parking: boolean;
        pet: boolean;
        nokids: boolean;
  }
  }

  export interface MypageCategoryType {
    category : string,
    setCategory :Function
  }

  