/**
 * 反色
 */
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[allow(dead_code)]
pub fn invert(data: &mut [u8]) {
    let len = data.len();
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        let gray_value = 0.34 * r + 0.5 * g + 0.16 * b;
        let color = f32::max(255.0 - gray_value, 0.0) as u8;
        data[i] = color;
        data[i + 1] = color;
        data[i + 2] = color;
    }
}

#[cfg(test)]
mod test {
    use image::{DynamicImage, ImageBuffer};
    #[test]
    fn invert() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::invert(data);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/invert.png").unwrap()
    }
}
