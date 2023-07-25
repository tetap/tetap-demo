/**
 * 色相
 */
use wasm_bindgen::prelude::*;

/** strength 是一个介于 0 到 100 之间的值 */
#[wasm_bindgen]
#[allow(dead_code)]
pub fn hue(data: &mut [u8], strength: u8) {
    let strength_val = if strength <= 0 {
        0.0
    } else if strength >= 100 {
        100.0
    } else {
        strength as f32
    };
    let len = data.len();
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        let [h, s, v] = rgb_to_hsv(r, g, b);
        let mut h_val = h;
        h_val = h_val * 100.0;
        h_val = h_val + strength_val;
        h_val = h_val % 100.0;
        h_val = h_val / 100.0;
        let [r1, g1, b1] = hsv_to_rgb(h_val, s, v);
        data[i] = r1;
        data[i + 1] = g1;
        data[i + 2] = b1;
    }
}

/** rgb转hsv */
fn rgb_to_hsv(r: f32, g: f32, b: f32) -> [f32; 3] {
    let r_255 = r / 255.0;
    let g_255 = g / 255.0;
    let b_255 = b / 255.0;
    let max = r_255.max(g_255.max(b_255));
    let min = r_255.min(g_255.min(b_255));
    let v = max;
    let d = max - min;
    let s = if max == 0.0 { 0.0 } else { d / max };
    let h = if max == min {
        0.0
    } else {
        if max == r_255 {
            (g_255 - b_255) / d + (if g_255 < b_255 { 6.0 } else { 0.0 })
        } else if max == g_255 {
            (b_255 - r_255) / d + 2.0
        } else if max == b_255 {
            (r_255 - g_255) / d + 4.0
        } else {
            0.0
        }
    };
    let h_val = h / 6.0;
    [h_val, s, v]
}

/** hsv转rgb */
fn hsv_to_rgb(h: f32, s: f32, v: f32) -> [u8; 3] {
    let i = f32::floor(h * 6.0);
    let f = h * 6.0 - i;
    let p = v * (1.0 - s);
    let q = v * (1.0 - f * s);
    let t = v * (1.0 - (1.0 - f) * s);
    let mut r = 0.0;
    let mut g = 0.0;
    let mut b = 0.0;
    let m = i % 6.0;
    if m == 0.0 {
        r = v;
        g = t;
        b = p;
    } else if m == 1.0 {
        r = q;
        g = v;
        b = p;
    } else if m == 2.0 {
        r = p;
        g = v;
        b = t;
    } else if m == 3.0 {
        r = p;
        g = q;
        b = v;
    } else if m == 4.0 {
        r = t;
        g = p;
        b = v;
    } else if m == 5.0 {
        r = v;
        g = p;
        b = q;
    }
    [(r * 255.0) as u8, (g * 255.0) as u8, (b * 255.0) as u8]
}

#[cfg(test)]
mod test {
    use image::{DynamicImage, ImageBuffer};

    #[test]
    fn hue() {
        let img = image::open("assets/test.jpg").expect("读取文件失败");
        let mut binding = img.to_rgba8().to_vec();
        let data = binding.as_mut_slice();
        super::hue(data, 20);
        let result_img = DynamicImage::ImageRgba8(
            ImageBuffer::from_vec(img.width(), img.height(), data.to_vec()).unwrap(),
        );
        result_img.save("assets/hue.png").unwrap()
    }
}
