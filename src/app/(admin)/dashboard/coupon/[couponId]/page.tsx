type AddCouponPageParams = {
  couponId: string;
};

export default function AddCouponPage({
  params,
}: {
  params: AddCouponPageParams;
}) {
  return <div>
    {params.couponId}
  </div>;
}
