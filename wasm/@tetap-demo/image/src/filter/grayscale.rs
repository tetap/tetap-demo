/**
 * 转灰度
 */
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[allow(dead_code)]
pub fn grayscale(data: &mut [u8]) {
    let len = data.len();
    let mut brightness: f32;
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        brightness = 0.34 * r + 0.5 * g + 0.16 * b;
        data[i] = brightness as u8;
        data[i + 1] = brightness as u8;
        data[i + 2] = brightness as u8;
    }
}

/** strength 是一个0-1之间的值 */
#[wasm_bindgen]
#[allow(dead_code)]
pub fn grayscale_strength(data: &mut [u8], strength: f32) {
    let strength_val = if strength <= 0.0 {
        0.0
    } else if strength >= 1.0 {
        1.0
    } else {
        strength
    };
    let len = data.len();
    let mut brightness: f32;
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        brightness = 0.34 * r + 0.5 * g + 0.16 * b;
        data[i] = ((r * (1.0 - strength)) + (brightness * strength_val)) as u8;
        data[i + 1] = ((g * (1.0 - strength_val)) + (brightness * strength_val)) as u8;
        data[i + 2] = ((b * (1.0 - strength_val)) + (brightness * strength_val)) as u8;
    }
}

#[cfg(test)]
mod test {
    use image::{DynamicImage, ImageBuffer};

    #[test]
    fn grayscale_strength() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::grayscale_strength(data, 0.8);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/grayscale_strength.png").unwrap()
    }
    #[test]
    fn grayscale() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::grayscale(data);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/grayscale.png").unwrap()
    }
}
