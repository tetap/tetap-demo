/**
 * 提升亮度对比度
 */
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[allow(dead_code)]
pub fn promotion(data: &mut [u8], brightness: f32, contrast: f32) {
    let len = data.len();
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        data[i] = ((contrast + 1.0) * r + brightness * 255.0) as u8;
        data[i + 1] = ((contrast + 1.0) * g + brightness * 255.0) as u8;
        data[i + 2] = ((contrast + 1.0) * b + brightness * 255.0) as u8;
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
