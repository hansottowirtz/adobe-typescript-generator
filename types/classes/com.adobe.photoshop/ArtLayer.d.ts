/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** any layer that can contain data */
		class ArtLayer extends Adobe.Photoshop.Layer {
			/**
			 * the interior opacity of the layer (between 0.0 and 100.0)
			 * @type {number}
			 */
			public fillOpacity: number;
			/**
			 * the density of the filter mask (between 0.0 and 100.0)
			 * @type {number}
			 */
			public filterMaskDensity: number;
			/**
			 * the feather of the filter mask (between 0.0 and 250.0)
			 * @type {number}
			 */
			public filterMaskFeather: number;
			/**
			 * is the layer grouped with the layer below?. Photoshop CS 
			 * changed the menu name to Create/Release Clipping Mask
			 * @type {boolean}
			 */
			public grouped: boolean;
			/**
			 * is the layer a background layer?
			 * @type {boolean}
			 */
			public isBackgroundLayer: boolean;
			/**
			 * to create a text layer set this property to 'text layer' on 
			 * an empty art layer of type 'normal'
			 * @type {Adobe.Photoshop.LayerKind}
			 */
			public kind: Adobe.Photoshop.LayerKind;
			/**
			 * the density of the layer mask (between 0.0 and 100.0)
			 * @type {number}
			 */
			public layerMaskDensity: number;
			/**
			 * the feather of the layer mask (between 0.0 and 250.0)
			 * @type {number}
			 */
			public layerMaskFeather: number;
			/**
			 * @type {boolean}
			 */
			public pixelsLocked: boolean;
			/**
			 * @type {boolean}
			 */
			public positionLocked: boolean;
			/**
			 * the text that is associated with the art layer. Only valid 
			 * for art layers whose 'kind' is a text layer
			 * @type {Adobe.Photoshop.TextItem}
			 * @readonly
			 */
			public readonly textItem: Adobe.Photoshop.TextItem;
			/**
			 * @type {boolean}
			 */
			public transparentPixelsLocked: boolean;
			/**
			 * the density of the vector mask (between 0.0 and 100.0)
			 * @type {number}
			 */
			public vectorMaskDensity: number;
			/**
			 * the feather of the vector mask (between 0.0 and 250.0)
			 * @type {number}
			 */
			public vectorMaskFeather: number;
			/**
			 * adjust brightness and constrast
			 * @param {number} brightness 
			 * @param {number} contrast 
			 * @returns {void}
			 */
			public adjustBrightnessContrast(brightness: number, contrast: number): void;
			/**
			 * @param {any[]} shadows list of adjustments for shadows. 
			 * There must be 3 values in the list
			 * @param {any[]} midtones list of adjustments for midtones. 
			 * There must be 3 values in the list
			 * @param {any[]} highlights list of adjustments for 
			 * highlights. There must be 3 values in the list
			 * @param {boolean} preserveLuminosity 
			 * @returns {void}
			 */
			public adjustColorBalance(shadows: any[], midtones: any[], highlights: any[], preserveLuminosity: boolean): void;
			/**
			 * adjust curves of the selected channels
			 * @param {any[]} curveShape list of curve points (number of 
			 * points must be between 2 and 14)
			 * @returns {void}
			 */
			public adjustCurves(curveShape: any[]): void;
			/**
			 * adjust levels of the selected channels
			 * @param {number} inputRangeStart 
			 * @param {number} inputRangeEnd 
			 * @param {number} inputRangeGamma 
			 * @param {number} outputRangeStart 
			 * @param {number} outputRangeEnd 
			 * @returns {void}
			 */
			public adjustLevels(inputRangeStart: number, inputRangeEnd: number, inputRangeGamma: number, outputRangeStart: number, outputRangeEnd: number): void;
			/**
			 * apply the add noise filter
			 * @param {number} amount 
			 * @param {Adobe.Photoshop.NoiseDistribution} distribution 
			 * @param {boolean} monochromatic 
			 * @returns {void}
			 */
			public applyAddNoise(amount: number, distribution: Adobe.Photoshop.NoiseDistribution, monochromatic: boolean): void;
			/**
			 * apply the average filter
			 * @returns {void}
			 */
			public applyAverage(): void;
			/**
			 * apply the blur filter
			 * @returns {void}
			 */
			public applyBlur(): void;
			/**
			 * apply the blur more filter
			 * @returns {void}
			 */
			public applyBlurMore(): void;
			/**
			 * apply the clouds filter
			 * @returns {void}
			 */
			public applyClouds(): void;
			/**
			 * apply the custom filter
			 * @param {any[]} characteristics filter characteristics (array 
			 * of 25 values - Correspons to a left to right, top to bottom 
			 * traversal of array presented in the Ui)
			 * @param {number} scale 
			 * @param {number} offset 
			 * @returns {void}
			 */
			public applyCustomFilter(characteristics: any[], scale: number, offset: number): void;
			/**
			 * apply the de-interlace filter
			 * @param {Adobe.Photoshop.EliminateFields} eliminateFields 
			 * @param {Adobe.Photoshop.CreateFields} createFields 
			 * @returns {void}
			 */
			public applyDeInterlace(eliminateFields: Adobe.Photoshop.EliminateFields, createFields: Adobe.Photoshop.CreateFields): void;
			/**
			 * apply the despeckle filter
			 * @returns {void}
			 */
			public applyDespeckle(): void;
			/**
			 * apply the difference clouds filter
			 * @returns {void}
			 */
			public applyDifferenceClouds(): void;
			/**
			 * apply the diffuse glow filter
			 * @param {number} graininess (range: 0 - 10)
			 * @param {number} glowAmount (range: 0 - 20)
			 * @param {number} clearAmount (range: 0 - 20)
			 * @returns {void}
			 */
			public applyDiffuseGlow(graininess: number, glowAmount: number, clearAmount: number): void;
			/**
			 * apply the displace filter
			 * @param {number} horizontalScale 
			 * @param {number} verticalScale 
			 * @param {Adobe.Photoshop.DisplacementMapType} 
			 * displacementType 
			 * @param {Adobe.Photoshop.UndefinedAreas} undefinedAreas 
			 * @param {File} displacementMapFile 
			 * @returns {void}
			 */
			public applyDisplace(horizontalScale: number, verticalScale: number, displacementType: Adobe.Photoshop.DisplacementMapType, undefinedAreas: Adobe.Photoshop.UndefinedAreas, displacementMapFile: File): void;
			/**
			 * apply the dust and scratches filter
			 * @param {number} radius in pixels
			 * @param {number} threshold 
			 * @returns {void}
			 */
			public applyDustAndScratches(radius: number, threshold: number): void;
			/**
			 * apply the gaussian blur filter
			 * @param {number} radius in pixels
			 * @returns {void}
			 */
			public applyGaussianBlur(radius: number): void;
			/**
			 * apply the glass filter
			 * @param {number} distortion (range: 0 - 20)
			 * @param {number} smoothness (range: 1 - 15)
			 * @param {number} scaling (range: 50 - 200)
			 * @param {boolean} invert ( default: false )
			 * @param {Adobe.Photoshop.TextureType} texture 
			 * @param {File} textureFile 
			 * @returns {void}
			 */
			public applyGlassEffect(distortion: number, smoothness: number, scaling: number, invert: boolean, texture: Adobe.Photoshop.TextureType, textureFile: File): void;
			/**
			 * apply the high pass filter
			 * @param {number} radius in pixels
			 * @returns {void}
			 */
			public applyHighPass(radius: number): void;
			/**
			 * apply the lens blur filter
			 * @param {Adobe.Photoshop.DepthMapSource} source source for 
			 * the depth map ( default: DepthMapSource.NONE )
			 * @param {number} focalDistance blur focal distance for the 
			 * depth map ( default: 0 )
			 * @param {boolean} invertDepthMap invert the depth map ( 
			 * default: false )
			 * @param {Adobe.Photoshop.Geometry} shape shape of the iris ( 
			 * default: Geometry.HEXAGON )
			 * @param {number} radius radius of the iris ( default: 15 )
			 * @param {number} bladeCurvature blade curvature of the iris ( 
			 * default: 0 )
			 * @param {number} rotation rotation of the iris ( default: 0 )
			 * @param {number} brightness brightness for the specular 
			 * highlights ( default: 0 )
			 * @param {number} threshold threshold for the specular 
			 * highlights ( default: 0 )
			 * @param {number} amount amount of noise ( default: 0 )
			 * @param {Adobe.Photoshop.NoiseDistribution} distribution 
			 * distribution value for the noise ( default: 
			 * NoiseDistribution.UNIFORM )
			 * @param {boolean} monochromatic is the noise monochromatic ( 
			 * default: false )
			 * @returns {void}
			 */
			public applyLensBlur(source: Adobe.Photoshop.DepthMapSource, focalDistance: number, invertDepthMap: boolean, shape: Adobe.Photoshop.Geometry, radius: number, bladeCurvature: number, rotation: number, brightness: number, threshold: number, amount: number, distribution: Adobe.Photoshop.NoiseDistribution, monochromatic: boolean): void;
			/**
			 * apply the lens flare filter
			 * @param {number} brightness (range: 10 - 300)
			 * @param {any[]} flareCenter position (unit value)
			 * @param {Adobe.Photoshop.LensType} lensType 
			 * @returns {void}
			 */
			public applyLensFlare(brightness: number, flareCenter: any[], lensType: Adobe.Photoshop.LensType): void;
			/**
			 * apply the maximum filter
			 * @param {number} radius in pixels
			 * @returns {void}
			 */
			public applyMaximum(radius: number): void;
			/**
			 * apply the median noise filter
			 * @param {number} radius in pixels
			 * @returns {void}
			 */
			public applyMedianNoise(radius: number): void;
			/**
			 * apply the minimum filter
			 * @param {number} radius in pixels
			 * @returns {void}
			 */
			public applyMinimum(radius: number): void;
			/**
			 * apply the motion blur filter
			 * @param {number} angle 
			 * @param {number} radius in pixels
			 * @returns {void}
			 */
			public applyMotionBlur(angle: number, radius: number): void;
			/**
			 * apply the NTSC colors filter
			 * @returns {void}
			 */
			public applyNTSC(): void;
			/**
			 * apply the ocean ripple filter
			 * @param {number} size (range: 1 - 15)
			 * @param {number} magnitude (range: 0 - 20)
			 * @returns {void}
			 */
			public applyOceanRipple(size: number, magnitude: number): void;
			/**
			 * apply the offset filter
			 * @param {any} horizontal (unit value)
			 * @param {any} vertical (unit value)
			 * @param {Adobe.Photoshop.OffsetUndefinedAreas} undefinedAreas 
			 * @returns {void}
			 */
			public applyOffset(horizontal: any, vertical: any, undefinedAreas: Adobe.Photoshop.OffsetUndefinedAreas): void;
			/**
			 * apply the pinch filter
			 * @param {number} amount (range: -100 - 100)
			 * @returns {void}
			 */
			public applyPinch(amount: number): void;
			/**
			 * apply the polar coordinates filter
			 * @param {Adobe.Photoshop.PolarConversionType} conversion 
			 * @returns {void}
			 */
			public applyPolarCoordinates(conversion: Adobe.Photoshop.PolarConversionType): void;
			/**
			 * apply the radial blur filter
			 * @param {number} amount from 0 to 100
			 * @param {Adobe.Photoshop.RadialBlurMethod} blurMethod 
			 * @param {Adobe.Photoshop.RadialBlurQuality} blurQuality 
			 * @returns {void}
			 */
			public applyRadialBlur(amount: number, blurMethod: Adobe.Photoshop.RadialBlurMethod, blurQuality: Adobe.Photoshop.RadialBlurQuality): void;
			/**
			 * apply the ripple filter
			 * @param {number} amount (range: -999 - 999)
			 * @param {Adobe.Photoshop.RippleSize} size 
			 * @returns {void}
			 */
			public applyRipple(amount: number, size: Adobe.Photoshop.RippleSize): void;
			/**
			 * apply the sharpen filter
			 * @returns {void}
			 */
			public applySharpen(): void;
			/**
			 * apply the sharpen edges filter
			 * @returns {void}
			 */
			public applySharpenEdges(): void;
			/**
			 * apply the sharpen more filter
			 * @returns {void}
			 */
			public applySharpenMore(): void;
			/**
			 * apply the shear filter
			 * @param {any[]} curve specification of shear curve. List of 
			 * curve points
			 * @param {Adobe.Photoshop.UndefinedAreas} undefinedAreas 
			 * @returns {void}
			 */
			public applyShear(curve: any[], undefinedAreas: Adobe.Photoshop.UndefinedAreas): void;
			/**
			 * apply the smart blur filter
			 * @param {number} radius radius (range: 0 - 1000)
			 * @param {number} threshold threshold (range: 0 - 1000)
			 * @param {Adobe.Photoshop.SmartBlurQuality} blurQuality 
			 * @param {Adobe.Photoshop.SmartBlurMode} mode 
			 * @returns {void}
			 */
			public applySmartBlur(radius: number, threshold: number, blurQuality: Adobe.Photoshop.SmartBlurQuality, mode: Adobe.Photoshop.SmartBlurMode): void;
			/**
			 * apply the spherize filter
			 * @param {number} amount (range: -100 - 100)
			 * @param {Adobe.Photoshop.SpherizeMode} mode 
			 * @returns {void}
			 */
			public applySpherize(amount: number, mode: Adobe.Photoshop.SpherizeMode): void;
			/**
			 * @param {string} styleName name of the layer style to apply
			 * @returns {void}
			 */
			public applyStyle(styleName: string): void;
			/**
			 * apply the texture fill filter
			 * @param {File} textureFile texture file. Must be a grayscale 
			 * Photoshop file
			 * @returns {void}
			 */
			public applyTextureFill(textureFile: File): void;
			/**
			 * apply the twirl filter
			 * @param {number} angle (range: -999 - 999)
			 * @returns {void}
			 */
			public applyTwirl(angle: number): void;
			/**
			 * apply the unsharp mask filter
			 * @param {number} amount 
			 * @param {number} radius in pixels
			 * @param {number} threshold threshold
			 * @returns {void}
			 */
			public applyUnSharpMask(amount: number, radius: number, threshold: number): void;
			/**
			 * apply the wave filter
			 * @param {number} generatorNumber number of generators
			 * @param {number} minimumWavelength 
			 * @param {number} maximumWavelength 
			 * @param {number} minimumAmplitude 
			 * @param {number} maximumAmplitude 
			 * @param {number} horizontalScale 
			 * @param {number} verticalScale 
			 * @param {Adobe.Photoshop.WaveType} waveType 
			 * @param {Adobe.Photoshop.UndefinedAreas} undefinedAreas 
			 * @param {number} randomSeed 
			 * @returns {void}
			 */
			public applyWave(generatorNumber: number, minimumWavelength: number, maximumWavelength: number, minimumAmplitude: number, maximumAmplitude: number, horizontalScale: number, verticalScale: number, waveType: Adobe.Photoshop.WaveType, undefinedAreas: Adobe.Photoshop.UndefinedAreas, randomSeed: number): void;
			/**
			 * apply the zigzag filter
			 * @param {number} amount (range: -100 - 100)
			 * @param {number} ridges 
			 * @param {Adobe.Photoshop.ZigZagType} style 
			 * @returns {void}
			 */
			public applyZigZag(amount: number, ridges: number, style: Adobe.Photoshop.ZigZagType): void;
			/**
			 * adjust contrast of the selected channels automatically
			 * @returns {void}
			 */
			public autoContrast(): void;
			/**
			 * adjust levels of the selected channels using auto levels 
			 * option
			 * @returns {void}
			 */
			public autoLevels(): void;
			/**
			 * @returns {void}
			 */
			public clear(): void;
			/**
			 * @param {boolean} merge if true the copy includes all visible 
			 * layers. If false the copy only copies from the current layer 
			 * ( default: false )
			 * @returns {void}
			 */
			public copy(merge: boolean): void;
			/**
			 * @returns {void}
			 */
			public cut(): void;
			/**
			 * @returns {void}
			 */
			public desaturate(): void;
			/**
			 * equalize the levels
			 * @returns {void}
			 */
			public equalize(): void;
			/**
			 * inverts the currently selected layer or channels
			 * @returns {void}
			 */
			public invert(): void;
			/**
			 * merges the layer down. This will remove the layer from the 
			 * document. The method returns a reference to the art layer 
			 * that this layer is merged into
			 * @returns {Adobe.Photoshop.ArtLayer}
			 */
			public merge(): Adobe.Photoshop.ArtLayer;
			/**
			 * only valid for RGB or CMYK documents
			 * @param {any[]} outputChannels list of channel 
			 * specifications. For each component channel that the document 
			 * has, you must specify a list of adjustment values followed 
			 * by a 'constant' value
			 * @param {boolean} monochrome use monochrome mixing? If this 
			 * is true you can only specify one channel value ( default: 
			 * false )
			 * @returns {void}
			 */
			public mixChannels(outputChannels: any[], monochrome: boolean): void;
			/**
			 * @param {Adobe.Photoshop.SolidColor} fillColor a color to use 
			 * for the fill
			 * @param {number} density density of the filter effect as a 
			 * percent ( default: 25 )
			 * @param {boolean} preserveLuminosity ( default: true )
			 * @returns {void}
			 */
			public photoFilter(fillColor: Adobe.Photoshop.SolidColor, density: number, preserveLuminosity: boolean): void;
			/**
			 * @param {number} levels 
			 * @returns {void}
			 */
			public posterize(levels: number): void;
			/**
			 * @param {Adobe.Photoshop.RasterizeType} target what to 
			 * rasterize
			 * @returns {void}
			 */
			public rasterize(target: Adobe.Photoshop.RasterizeType): void;
			/**
			 * @param {Adobe.Photoshop.AdjustmentReference} selectionMethod 
			 * @param {any[]} reds Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} yellows Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} greens Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} cyans Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} blues Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} magentas Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} whites Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} neutrals Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @param {any[]} blacks Array of 4 values: cyan, magenta, 
			 * yellow, black
			 * @returns {void}
			 */
			public selectiveColor(selectionMethod: Adobe.Photoshop.AdjustmentReference, reds: any[], yellows: any[], greens: any[], cyans: any[], blues: any[], magentas: any[], whites: any[], neutrals: any[], blacks: any[]): void;
			/**
			 * @param {number} shadowAmount percentage from 0 to 100 ( 
			 * default: 50 )
			 * @param {number} shadowWidth percentage from 0 to 100 for 
			 * tonal width (0 = narrow), (100 = broad) ( default: 50 )
			 * @param {number} shadowRaduis pixel amount from 0 to 2500 ( 
			 * default: 30 )
			 * @param {number} highlightAmount percentage from 0 to 100 ( 
			 * default: 0 )
			 * @param {number} highlightWidth percentage from 0 to 100 for 
			 * tonal width (0 = narrow), (100 = broad) ( default: 50 )
			 * @param {number} highlightRaduis pixel amount from 0 to 2500 
			 * ( default: 30 )
			 * @param {number} colorCorrection adjust the colors in the 
			 * changed portion of the image (-100 to 100) ( default: 20 )
			 * @param {number} midtoneContrast amount for the midtone 
			 * contrast (-100 to 100) ( default: 0 )
			 * @param {number} blackClip fractions of whites to be clipped 
			 * ( default: 0.01 )
			 * @param {number} whiteClip fractions of blacks to be clipped 
			 * ( default: 0.01 )
			 * @returns {void}
			 */
			public shadowHighlight(shadowAmount: number, shadowWidth: number, shadowRaduis: number, highlightAmount: number, highlightWidth: number, highlightRaduis: number, colorCorrection: number, midtoneContrast: number, blackClip: number, whiteClip: number): void;
			/**
			 * @param {number} level 
			 * @returns {void}
			 */
			public threshold(level: number): void;
		}
	}
}