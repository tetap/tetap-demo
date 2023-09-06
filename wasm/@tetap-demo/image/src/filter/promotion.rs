/**
 * 提升亮度对比度
 */
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[allow(dead_code)]
pub fn promotion(data: &mut [u8], brightness: f64, contrast: f64) {
    let len = data.len();
    let brightness_strength = 255.0 * (brightness * 0.5);
    let contrast_strength = f64::powi((contrast * 0.5) + 1.0, 2);
    for i in (0..len).step_by(4) {
        let mut r = f64::min((data[i] as f64) + brightness_strength, 255.0);
        let mut g = f64::min((data[i + 1] as f64) + brightness_strength, 255.0);
        let mut b = f64::min((data[i + 2] as f64) + brightness_strength, 255.0);
        r /= 255.0;
        r -= 0.5;
        r *= contrast_strength;
        r += 0.5;
        r *= 255.0;

        g /= 255.0;
        g -= 0.5;
        g *= contrast_strength;
        g += 0.5;
        g *= 255.0;

        b /= 255.0;
        b -= 0.5;
        b *= contrast_strength;
        b += 0.5;
        b *= 255.0;
        data[i] = r as u8;
        data[i + 1] = g as u8;
        data[i + 2] = b as u8;
    }
}

#[cfg(test)]
mod test {
    use image::{DynamicImage, ImageBuffer};
    #[test]
    fn promotion() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::promotion(data, 0.5, 0.0);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/promotion.png").unwrap()
    }
}
