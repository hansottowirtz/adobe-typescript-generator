/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ArtLayer extends Adobe.Photoshop.Layer {
			/** The interior opacity of the layer. Range: 0.0 to 100.0. */
			public fillOpacity: number;
			/** The density of the filter mask. Range: 0.0 and 100.0. */
			public filterMaskDensity: number;
			/** The feather of the filter mask. Range: 0.0 and 250.0. */
			public filterMaskFeather: number;
			/** If true, the layer is grouped with the layer below. */
			public grouped: boolean;
			/** If true, the layer is a background layer. */
			public isBackgroundLayer: boolean;
			/**
			 * Sets the layer kind (such as 'text layer') for an empty 
			 * layer. Valid only when the layer is empty and when 'is 
			 * background layer ' is false. You can use the 'kind ' 
			 * property to make a background layer a normal layer; however, 
			 * to make a layer a background layer, you must set 'is 
			 * background layer' to true.
			 */
			public kind: Adobe.Photoshop.LayerKind;
			/** The density of the layer mask. Range: 0.0 to 100.0. */
			public layerMaskDensity: number;
			/** The feather of the layer mask. Range: 0.0 and 250.0. */
			public layerMaskFeather: number;
			/** If true, the pixels in the layer's image cannot be edited. */
			public pixelsLocked: boolean;
			/**
			 * If true, the pixels in the layer's image cannot be moved 
			 * within the layer.
			 */
			public positionLocked: boolean;
			/**
			 * The text that is associated with the layer. Valid only when 
			 * 'kind' is text layer.
			 */
			public readonly textItem: Adobe.Photoshop.TextItem;
			/**
			 * If true, editing is confined to the opaque portions of the 
			 * layer.
			 */
			public transparentPixelsLocked: boolean;
			/** The density of the vector mask. Range: 0.0 and 100.0. */
			public vectorMaskDensity: number;
			/** The feather of the vector mask. Range: 0.0 and 250.0. */
			public vectorMaskFeather: number;
			/**
			 * Adjusts the brightness and constrast.
			 * @param {number} brightness - The brightness amount. Range: 
			 * -100 to 100.
			 * @param {number} contrast - The contrast amount. Range: -100 
			 * to 100.
			 */
			public adjustBrightnessContrast(brightness: number, contrast: number): void;
			/**
			 * Adjusts the color balance of the layer's component channels.
			 * @param {any} shadows - The adjustments for the shadows. The 
			 * array must include three values (in the range -100 to 100), 
			 * which represent cyan or red, magenta or green, and yellow or 
			 * blue, when the document mode is CMYK or RGB.
			 * @param {any} midtones - The adjustments for the midtones. 
			 * The array must include three values (in the range -100 to 
			 * 100), which represent cyan or red, magenta or green, and 
			 * yellow or blue, when the document mode is CMYK or RGB.
			 * @param {any} highlights - The adjustments for the 
			 * highlights. The array must include three values (in the 
			 * range -100 to 100), which represent cyan or red, magenta or 
			 * green, and yellow or blue, when the document mode is CMYK or 
			 * RGB.
			 * @param {boolean} preserveLuminosity - If true, luminosity is 
			 * preserved.
			 */
			public adjustColorBalance(shadows: any, midtones: any, highlights: any, preserveLuminosity: boolean): void;
			/**
			 * Adjusts the tonal range of the selected channel using up to 
			 * fourteen points.
			 * @param {any} curveShape - The curve points. The number of 
			 * points must be between 2 and 14.
			 */
			public adjustCurves(curveShape: any): void;
			/**
			 * Adjusts levels of the selected channels.
			 * @param {number} inputRangeStart - The input levels minimum. 
			 * Range: 0 to 253.
			 * @param {number} inputRangeEnd - The input levels maximum. 
			 * Range: (input range start + 2) to 253.
			 * @param {number} inputRangeGamma - The input levels gamma. 
			 * Range: 0.10 to 9.99.
			 * @param {number} outputRangeStart - The output levels 
			 * minimum. Range: 0 to 253.
			 * @param {number} outputRangeEnd - The output levels maximum. 
			 * Range: (output range start + 2) to 253.
			 */
			public adjustLevels(inputRangeStart: number, inputRangeEnd: number, inputRangeGamma: number, outputRangeStart: number, outputRangeEnd: number): void;
			/**
			 * Applies the add noise filter.
			 * @param {number} amount - The amount of noise (as a 
			 * percentage). Range: 0.1 to 400.0.
			 * @param {Adobe.Photoshop.NoiseDistribution} distribution - 
			 * The noise distribution type.
			 * @param {boolean} monochromatic - If true, applies the filter 
			 * only to the tonal elements in the image without changing the 
			 * colors.
			 */
			public applyAddNoise(amount: number, distribution: Adobe.Photoshop.NoiseDistribution, monochromatic: boolean): void;
			/** Applies the average filter. */
			public applyAverage(): void;
			/** Applies the blur filter. */
			public applyBlur(): void;
			/** Applies the blur more filter. */
			public applyBlurMore(): void;
			/** Applies the clouds filter. */
			public applyClouds(): void;
			/**
			 * Applies the custom filter.
			 * @param {any} characteristics - The custom filter 
			 * characteristics. This is an array of 25 values that 
			 * corresponds to a left-to-right, top-to- bottom traversal of 
			 * the array presented in the Custom dialog in the user 
			 * interface (Filter > Other > Custom).
			 * @param {number} scale - The value by which to divide the sum 
			 * of the brightness values of the pixels included in the 
			 * calculation.
			 * @param {number} offset - The value to be added to the result 
			 * of the scale calculation.
			 */
			public applyCustomFilter(characteristics: any, scale: number, offset: number): void;
			/**
			 * Applies the de-interlace filter.
			 * @param {Adobe.Photoshop.EliminateFields} eliminateFields - 
			 * The fields to eliminate.
			 * @param {Adobe.Photoshop.CreateFields} createFields - The 
			 * method to use to replace eliminated fields.
			 */
			public applyDeInterlace(eliminateFields: Adobe.Photoshop.EliminateFields, createFields: Adobe.Photoshop.CreateFields): void;
			/** Applies the despeckle filter. */
			public applyDespeckle(): void;
			/** Applies the difference clouds filter. */
			public applyDifferenceClouds(): void;
			/**
			 * Applies the diffuse glow filter.
			 * @param {number} graininess - The amount of graininess. 
			 * Range: 0 to 10.
			 * @param {number} glowAmount - The glow amount. Range: 0 to 
			 * 20.
			 * @param {number} clearAmount - The clear amount. Range: 0 to 
			 * 20.
			 */
			public applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void;
			/**
			 * Applies the displace filter.
			 * @param {number} horizontalScale - The amount of horizontal 
			 * distortion. Range: -999 to 999.
			 * @param {number} verticalScale - The amount of vertical 
			 * distortion. Range: -999 to 999.
			 * @param {Adobe.Photoshop.DisplacementMapType} 
			 * displacementType - The displacement type.
			 * @param {Adobe.Photoshop.UndefinedAreas} undefinedAreas - The 
			 * treatment of undistorted areas.
			 * @param {Adobe.Flash.Filesystem.File} displacementMapFile - 
			 * The distortion image map.
			 */
			public applyDisplace(horizontalScale: number, verticalScale: number, displacementType: Adobe.Photoshop.DisplacementMapType, undefinedAreas: Adobe.Photoshop.UndefinedAreas, displacementMapFile: Adobe.Flash.Filesystem.File): void;
			/**
			 * Applies the dust and scratches filter.
			 * @param {number} radius - The size (in pixels) of the area 
			 * searched for dissimilar pixels. Range: 1 to 16.
			 * @param {number} threshold - Determines how dissimilar the 
			 * pixels should be before they are eliminated. Range: 0 to 
			 * 255.
			 */
			public applyDustAndScratches(radius: number, threshold: number): void;
			/**
			 * Applies the gaussian blur filter.
			 * @param {number} radius - The blur width in pixels. Range: 
			 * 1.0 to 250.0.
			 */
			public applyGaussianBlur(radius: number): void;
			/**
			 * Applies the glass filter.
			 * @param {number} distortion - The amount of distortion. 
			 * Range: 0 to 20.
			 * @param {number} smoothness - The smoothness. Range: 1 to 15.
			 * @param {number} scaling - The amount of scaling. Range: 50 
			 * to 200.
			 * @param {boolean} invert - If true, the texture is inverted. 
			 * ( default: false )
			 * @param {Adobe.Photoshop.TextureType} texture - The type of 
			 * texture.
			 * @param {Adobe.Flash.Filesystem.File} textureFile - The file 
			 * from which to load the texture type.
			 */
			public applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert: boolean, texture: Adobe.Photoshop.TextureType, textureFile: Adobe.Flash.Filesystem.File): void;
			/**
			 * Applies the high pass filter.
			 * @param {number} radius - The width (in pixels) of the radius 
			 * where edge details are retained.
			 */
			public applyHighPass(radius: number): void;
			/**
			 * Apply the lens blur filter.
			 * @param {Adobe.Photoshop.DepthMapSource} source - The source 
			 * for the depth map. ( default: DepthMapSource.NONE )
			 * @param {number} focalDistance - The blur focal distance (in 
			 * pixels) for the depth map. RangeL 0 to 255. Valid only when 
			 * 'source' is transparency or layer mask. ( default: 0 )
			 * @param {boolean} invertDepthMap - If true, inverts the depth 
			 * map. ( default: false )
			 * @param {Adobe.Photoshop.Geometry} shape - The shape of the 
			 * iris. ( default: Geometry.HEXAGON )
			 * @param {number} radius - The radius of the iris. Range: 0 to 
			 * 100. ( default: 15 )
			 * @param {number} bladeCurvature - The blade curvature of the 
			 * iris. Range: 0 to 100. ( default: 0 )
			 * @param {number} rotation - The rotation of the iris (in 
			 * degrees). Range: 0 to 360. ( default: 0 )
			 * @param {number} brightness - The brightness for the specular 
			 * highlights. Range: 0 to 100. ( default: 0 )
			 * @param {number} threshold - The threshold for the specular 
			 * highlights. Range: 0 to 255. ( default: 0 )
			 * @param {number} amount - The amount of noise. Range: 0 to 
			 * 100. ( default: 0 )
			 * @param {Adobe.Photoshop.NoiseDistribution} distribution - 
			 * The distribution value for the noise. ( default: 
			 * NoiseDistribution.UNIFORM )
			 * @param {boolean} monochromatic - If true, the noise is 
			 * monochromatic. ( default: false )
			 */
			public applyLensBlur(source: Adobe.Photoshop.DepthMapSource, focalDistance: number, invertDepthMap: boolean, shape: Adobe.Photoshop.Geometry, radius: number, bladeCurvature: number, rotation: number, brightness: number, threshold: number, amount: number, distribution: Adobe.Photoshop.NoiseDistribution, monochromatic: boolean): void;
			/**
			 * Applies the lens flare filter.
			 * @param {number} brightness - The flare brightness. Range: 10 
			 * to 300.
			 * @param {any[]} flareCenter - The position of the flare 
			 * center.
			 * @param {Adobe.Photoshop.LensType} lensType - The lens type.
			 */
			public applyLensFlare(brightness: number, flareCenter: any[], lensType: Adobe.Photoshop.LensType): void;
			/**
			 * Applies the maximum filter.
			 * @param {number} radius - The choke area (in pixels). Range: 
			 * 0 to 100.
			 */
			public applyMaximum(radius: number): void;
			/**
			 * Applies the median noise filter.
			 * @param {number} radius - The size of the area searched for 
			 * pixels of similar brightness. Range: 0 to 100.
			 */
			public applyMedianNoise(radius: number): void;
			/**
			 * Applies the minimum filter.
			 * @param {number} radius - The spread area (in pixels). Range: 
			 * 0 to 100.
			 */
			public applyMinimum(radius: number): void;
			/**
			 * Applies the motion blur filter.
			 * @param {number} angle - The angle (in degrees). Range: -360 
			 * to 360.
			 * @param {number} radius - The radius (in pixels). Range: 1 to 
			 * 999.
			 */
			public applyMotionBlur(angle: number, radius: number): void;
			/** Applies the NTSC colors filter. */
			public applyNTSC(): void;
			/**
			 * Applies the ocean ripple filter.
			 * @param {number} size - The ripple size. Range: 1 to 15.
			 * @param {number} magnitude - The ripple magnitude. Range: 0 
			 * to 20.
			 */
			public applyOceanRipple(size: number, magnitude: number): void;
			/**
			 * Applies the offset filter.
			 * @param {string} horizontal - The amount (in pixels) to move 
			 * the selection horizontally (to the right). Range: -6144 to 
			 * 6144.
			 * @param {string} vertical - The amount (in pixels) to move 
			 * the selection vertically (downward). Range: -6144 to 6144.
			 * @param {Adobe.Photoshop.OffsetUndefinedAreas} undefinedAreas 
			 * - The method for filling areas left blank by the offset.
			 */
			public applyOffset(horizontal: string, vertical: string, undefinedAreas: Adobe.Photoshop.OffsetUndefinedAreas): void;
			/**
			 * Applies the pinch filter.
			 * @param {number} amount - The pinch amount. Range: -100 to 
			 * 100.
			 */
			public applyPinch(amount: number): void;
			/**
			 * Applies the polar coordinates filter.
			 * @param {Adobe.Photoshop.PolarConversionType} conversion - 
			 * The conversion type.
			 */
			public applyPolarCoordinates(conversion: Adobe.Photoshop.PolarConversionType): void;
			/**
			 * Applies the radial blur filter.
			 * @param {number} amount - The amount of blur. Range: 1 to 
			 * 100.
			 * @param {Adobe.Photoshop.RadialBlurMethod} blurMethod - The 
			 * blur method to use.
			 * @param {Adobe.Photoshop.RadialBlurQuality} blurQuality - The 
			 * smoothness or graininess of the blurred image.
			 */
			public applyRadialBlur(amount: number, blurMethod: Adobe.Photoshop.RadialBlurMethod, blurQuality: Adobe.Photoshop.RadialBlurQuality): void;
			/**
			 * Applies the ripple filter.
			 * @param {number} amount - The ripple amount. Range: -999 to 
			 * 999.
			 * @param {Adobe.Photoshop.RippleSize} size - The ripple size.
			 */
			public applyRipple(amount: number, size: Adobe.Photoshop.RippleSize): void;
			/** Applies the sharpen filter. */
			public applySharpen(): void;
			/** Applies the sharpen edges filter. */
			public applySharpenEdges(): void;
			/** Applies the sharpen more filter. */
			public applySharpenMore(): void;
			/**
			 * Applies the shear filter.
			 * @param {any} curve - Specification of the shear curve in 
			 * points as x,y coordinate pairs in the format [[x1, y1],[x2, 
			 * y2]]. Any number of coordinate pairs can be specified.
			 * @param {Adobe.Photoshop.UndefinedAreas} undefinedAreas - The 
			 * treatment of areas left blank by the distortion.
			 */
			public applyShear(curve: any, undefinedAreas: Adobe.Photoshop.UndefinedAreas): void;
			/**
			 * Applies the smart blur filter.
			 * @param {number} radius - The blur radius. Range: 0 - 1000.
			 * @param {number} threshold - The blur threshold. Range: 0 - 
			 * 1000.
			 * @param {Adobe.Photoshop.SmartBlurQuality} blurQuality - The 
			 * smoothness or graininess of the blurred image.
			 * @param {Adobe.Photoshop.SmartBlurMode} mode - The smart blur 
			 * mode.
			 */
			public applySmartBlur(radius: number, threshold: number, blurQuality: Adobe.Photoshop.SmartBlurQuality, mode: Adobe.Photoshop.SmartBlurMode): void;
			/**
			 * Applies the spherize filter.
			 * @param {number} amount - The amount of distortion. Range: 
			 * -100 to 100.
			 * @param {Adobe.Photoshop.SpherizeMode} mode - The distortion 
			 * mode.
			 */
			public applySpherize(amount: number, mode: Adobe.Photoshop.SpherizeMode): void;
			/**
			 * Applies the specified style to the layer.
			 * @param {string} styleName - The layer style to apply.
			 */
			public applyStyle(styleName: string): void;
			/**
			 * Applies the texture fill filter.
			 * @param {Adobe.Flash.Filesystem.File} textureFile - The 
			 * texture file. Must be a grayscale Photoshop file.
			 */
			public applyTextureFill(textureFile: Adobe.Flash.Filesystem.File): void;
			/**
			 * Applies the twirl filter.
			 * @param {number} angle - The twirl angle. Range: -999 to 999.
			 */
			public applyTwirl(angle: number): void;
			/**
			 * Applies the unsharp mask filter.
			 * @param {number} amount - The amount of sharpening (as a 
			 * percentage). Range: 1 to 500.
			 * @param {number} radius - The radius in pixels. Range: 0.1 to 
			 * 250.0.
			 * @param {number} threshold - The contrast threshold. Range: 0 
			 * to 255.
			 */
			public applyUnSharpMask(amount: number, radius: number, threshold: number): void;
			/**
			 * Applies the wave filter.
			 * @param {number} generatorNumber - The number of generators. 
			 * Range: 1 to 999.
			 * @param {number} minimumWavelength - The minimum wave length. 
			 * Range: 1 to 998.
			 * @param {number} maximumWavelength - The maximum wave length. 
			 * Range: 2 to (minimum wavelength + 1)
			 * @param {number} minimumAmplitude - The minimum amplitude. 
			 * Range: 1 to 998.
			 * @param {number} maximumAmplitude - The maximum amplitude. 
			 * Range: 2 to (minimum amplitude + 1)
			 * @param {number} horizontalScale - The amount of horizontal 
			 * scale (as a percentage). Range: 1 to 100.
			 * @param {number} verticalScale - The amount of vertical scale 
			 * (as a percentage). Range: 1 to 100.
			 * @param {Adobe.Photoshop.WaveType} waveType - The wave type.
			 * @param {Adobe.Photoshop.UndefinedAreas} undefinedAreas - The 
			 * treatment of areas left blank by the distortion.
			 * @param {number} randomSeed - The random seed.
			 */
			public applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: Adobe.Photoshop.WaveType, undefinedAreas: Adobe.Photoshop.UndefinedAreas, randomSeed: number): void;
			/**
			 * Applies the zigzag filter.
			 * @param {number} amount - The amount of zigzag. Range: -100 
			 * to 100.
			 * @param {number} ridges - The ridge length.
			 * @param {Adobe.Photoshop.ZigZagType} style - The zigzag 
			 * style.
			 */
			public applyZigZag(amount: number, ridges: number, style: Adobe.Photoshop.ZigZagType): void;
			/**
			 * Adjusts the contrast of the selected channels automatically.
			 */
			public autoContrast(): void;
			/**
			 * Adjust the levels of the selected channels using the auto 
			 * levels option.
			 */
			public autoLevels(): void;
			/** Cuts the layer without moving it to the clipboard. */
			public clear(): void;
			/**
			 * Copies the layer to the clipboard.
			 * @param {boolean} merge - If true, the copy includes all 
			 * visible layers. If false, the copy only copies from the 
			 * current layer. ( default: false )
			 */
			public copy(merge: boolean): void;
			/** Cuts the layer to the clipboard. */
			public cut(): void;
			/**
			 * Converts a color image to a grayscale image in the current 
			 * color mode by assigning equal values of each component color 
			 * to each pixel.
			 */
			public desaturate(): void;
			/**
			 * Redistributes the brightness values of pixels in an image to 
			 * more evenly represent the entire range of brightness levels 
			 * within the image.
			 */
			public equalize(): void;
			/**
			 * Inverts the colors in the layer by converting the brightness 
			 * value of each pixel in the channels to the inverse value on 
			 * the 256-step color-values scale.
			 */
			public invert(): void;
			/**
			 * Merges the layer down, removing the layer from the document. 
			 * Returns a reference to the art layer that this layer is 
			 * merged into.
			 */
			public merge(): Adobe.Photoshop.ArtLayer;
			/**
			 * Modifies a targeted (output) color channel using a mix of 
			 * the existing color channels in the image. (output channels = 
			 * An array of channel specifications. For each component 
			 * channel, specify a list of adjustment values (-200 to 200) 
			 * followed by a 'constant' value (-200 to 200).) When 
			 * monochrome = true, the maximum number of channel value 
			 * specifications is 1. Valid only when 'document mode' = RGB 
			 * or CMYK. RGB arrays must include four doubles. CMYK arrays 
			 * must include five doubles.
			 * @param {any} outputChannels - A list of channel 
			 * specifications. For each component channel that the document 
			 * has, you must specify a list of adjustment values followed 
			 * by a 'constant' value.
			 * @param {boolean} monochrome - If true, uses monochrome 
			 * mixing. Note: If this is true, you can only specify one 
			 * channel value. ( default: false )
			 */
			public mixChannels(outputChannels: any, monochrome: boolean): void;
			/**
			 * Adjusts the layer's color balance and temperature as if a 
			 * color filter had been applied.
			 * @param {Adobe.Photoshop.SolidColor} fillColor - The color to 
			 * use for the fill.
			 * @param {number} density - The density (as a percentage) of 
			 * the filter effect. Range: 1 to 100. ( default: 25 )
			 * @param {boolean} preserveLuminosity - If true, luminosity is 
			 * preserved. ( default: true )
			 */
			public photoFilter(fillColor: Adobe.Photoshop.SolidColor, density: number, preserveLuminosity: boolean): void;
			/**
			 * Specifies the number of tonal levels for each channel and 
			 * then maps pixels to the closest matching level.
			 * @param {number} levels - The tonal levels. Range: 2 to 255.
			 */
			public posterize(levels: number): void;
			/**
			 * Converts the targeted content in the layer into a flat, 
			 * raster image.
			 * @param {Adobe.Photoshop.RasterizeType} target - What to 
			 * rasterize.
			 */
			public rasterize(target: Adobe.Photoshop.RasterizeType): void;
			/**
			 * @param {Adobe.Photoshop.AdjustmentReference} selectionMethod 
			 * - 
			 * @param {any} reds - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} yellows - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} greens - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} cyans - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} blues - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} magentas - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} whites - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} neutrals - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any} blacks - Array of 4 values: cyan, magenta, 
			 * yellow, black
			 */
			public selectiveColor(selectionMethod: Adobe.Photoshop.AdjustmentReference, reds: any, yellows: any, greens: any, cyans: any, blues: any, magentas: any, whites: any, neutrals: any, blacks: any): void;
			/**
			 * Adjusts the range of tones in the shadows and highlights.
			 * @param {number} shadowAmount - The shadow amount, as a 
			 * percentage. Range: 0 to 100. ( default: 50 )
			 * @param {number} shadowWidth - The shadow width, as a 
			 * percentage. Range: 0 to 100 for tonal width (0 = narrow), 
			 * (100 = broad). ( default: 50 )
			 * @param {number} shadowRaduis - The shadow radius (in 
			 * pixels). Range: 0 to 2500. ( default: 30 )
			 * @param {number} highlightAmount - The highlight amount, as a 
			 * percentage. Range: 0 to 100. ( default: 0 )
			 * @param {number} highlightWidth - The highlight width. Range: 
			 * 0 to 100 for tonal width (0 = narrow), (100 = broad). ( 
			 * default: 50 )
			 * @param {number} highlightRaduis - The highlight radius (in 
			 * pixels). Range: 0 to 2500. ( default: 30 )
			 * @param {number} colorCorrection - The amount to adjust the 
			 * colors in the changed portion of the image. Range: -100 to 
			 * 100. ( default: 20 )
			 * @param {number} midtoneContrast - The amount of midtone 
			 * contrast. Range: -100 to 100. ( default: 0 )
			 * @param {number} blackClip - Fractions of whites to be 
			 * clipped. Range: 0.000 to 50.000. ( default: 0.01 )
			 * @param {number} whiteClip - Fractions of blacks to be 
			 * clipped. Range: 0.000 to 50.000. ( default: 0.01 )
			 */
			public shadowHighlight(shadowAmount: number, shadowWidth: number, shadowRaduis: number, highlightAmount: number, highlightWidth: number, highlightRaduis: number, colorCorrection: number, midtoneContrast: number, blackClip: number, whiteClip: number): void;
			/**
			 * Converts grayscale or color images to high-contrast, B/W 
			 * images by converting pixels lighter than the specified 
			 * threshold to white and pixels darker than the threshold to 
			 * black.
			 * @param {number} level - The threshold level.
			 */
			public threshold(level: number): void;
		}
	}
}