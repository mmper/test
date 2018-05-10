import axios from 'axios'

/**
 * @public couponActivityId
 * @returns Promise
 */
export function getCouponList (data = {}) {
  return axios({
    method: 'POST',
    url: `/GetCouponActivity/CustomerGetCoupon`,
    data
  })
}

/**
 * 设置领券活动提醒
 * @public couponActivityId
 * @returns Promise
 */
export function remindPeopleToGetCoupon (data = {}) {
  return axios({
    method: 'POST',
    url: `/GetCouponActivity/RemindPeopleToGetCoupon`,
    data
  })
}
