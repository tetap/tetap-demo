/**
 * RGB升温
 */
use wasm_bindgen::prelude::*;

/** strength 是一个介于 0 到 1 之间的值，表示升温的强度。 */
#[wasm_bindgen]
#[allow(dead_code)]
pub fn heat_up(data: &mut [u8], strength: f32) {
    let strength_val = if strength <= 0.0 {
        0.0
    } else if strength >= 1.0 {
        1.0
    } else {
        strength
    };
    let len = data.len();
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        data[i] = f32::min(
            255.0,
            (r * (1.0 - (0.607 * strength_val)))
                + (g * (0.769 * strength_val))
                + (b * (0.189 * strength_val)),
        ) as u8;
        data[i + 1] = f32::min(
            255.0,
            (r * (0.349 * strength_val))
                + (g * (1.0 - (0.314 * strength_val)))
                + (b * (0.168 * strength_val)),
        ) as u8;
        data[i + 2] = f32::min(
            255.0,
            (r * (0.272 * strength_val))
                + (g * (0.534 * strength_val))
                + (b * (1.0 - (0.869 * strength_val))),
        ) as u8;
    }
}

#[cfg(test)]
mod test {
    use image::{DynamicImage, ImageBuffer};

    #[test]
    fn heat_up() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::heat_up(data, 0.8);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/heat_up.png").unwrap()
    }
}
