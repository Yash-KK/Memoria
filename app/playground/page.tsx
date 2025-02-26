"use client";
import Card from "@/components/Card";

const PlayGround: React.FC = () => {
  return (
    <div className="grid grid-cols-4">
      <Card type="Twitter" />
      <Card type="Youtube" />
      <Card type="Youtube" />
      <Card type="Youtube" />
      <Card type="Twitter" />
    </div>
  );
};

export default PlayGround;
