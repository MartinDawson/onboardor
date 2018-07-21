import React from "react";
import { Image } from "rebass";

interface IProps extends IMember {
  member: IMember;
}

export interface IMember {
  id: number;
  name: string;
  avatarUrl: string;
}

const Member = ({
   name,
   avatarUrl
}: IProps) => (
  <div>
    <Image src={avatarUrl} />
    {name}

    <div>
      Monthly progress
    </div>
  </div>
);

export default Member;
