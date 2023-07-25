/**
 * 饱和度
 */
use wasm_bindgen::prelude::*;

/** 饱和度范围调整 转换为 -1 至 1 */
#[wasm_bindgen]
#[allow(dead_code)]
pub fn saturation(data: &mut [u8], strength: f32) {
    let strength_val = if strength <= -1.0 {
        -1.0 * 300.0
    } else if strength >= 1.0 {
        1.0 * 300.0
    } else {
        (strength as f32) * 300.0
    } * -1.0;
    let len = data.len();
    for i in (0..len).step_by(4) {
        let mut r = data[i] as f32;
        let mut g = data[i + 1] as f32;
        let mut b = data[i + 2] as f32;
        let max = r.max(g.max(b));
        let avg = (r + g + b) / 3.0;
        let amt = ((f32::abs(max - avg) * 2.0 / 255.0) * strength_val) / 100.0;
        if r != max {
            r += (max - r) * amt;
        }
        if g != max {
            g += (max - g) * amt;
        }
        if b != max {
            b += (max - b) * amt;
        }
        data[i] = r as u8;
        data[i + 1] = g as u8;
        data[i + 2] = b as u8;
    }
}

#[cfg(test)]
mod test {
    use image::{DynamicImage, ImageBuffer};
    #[test]
    fn saturation() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::saturation(data, 1.0);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/saturation.png").unwrap()
    }
}
