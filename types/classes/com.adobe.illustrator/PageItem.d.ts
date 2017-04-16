/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** A page item object */
		class PageItem extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** is the artwork used to create a knockout */
			public artworkKnockout: Adobe.Illustrator.KnockoutState;
			/** the mode used when compositing an object */
			public blendingMode: Adobe.Illustrator.BlendModes;
			/**
			 * the bounds of the artwork including stroke width and 
			 * controls
			 */
			public readonly controlBounds: any[];
			/** can the art item be modified */
			public readonly editable: boolean;
			/** the bounds of the artwork excluding stroke width */
			public readonly geometricBounds: any[];
			/** the height of the art item ( 0.0 - 16348.0 ) */
			public height: number;
			/** is this artwork item hidden? */
			public hidden: boolean;
			/** is the artwork isolated */
			public isIsolated: boolean;
			/** the layer to which this artwork belongs */
			public readonly layer: Adobe.Illustrator.Layer;
			/** the left position of the art item */
			public left: number;
			/** is this artwork item locked? */
			public locked: boolean;
			/** The item's name */
			public name: string;
			/** the note assigned to this artwork item */
			public note: string;
			/**
			 * the object's opacity (between 0.0 and 100.0) ( 0.0 - 100.0 )
			 */
			public opacity: number;
			/** is this artwork item aligned to Pixel Grid? */
			public pixelAligned: boolean;
			/** the position of the top left corner of the art item */
			public position: any[];
			/** is this artwork item selected? */
			public selected: boolean;
			/** is the art item sliced (default: false) */
			public sliced: boolean;
			/** The collection of tags associated with this page item */
			public readonly tags: Adobe.Illustrator.Tags;
			/** the top position of the art item */
			public top: number;
			/**
			 * the value of the Adobe URL tag assigned to this artwork item
			 */
			public uRL: string;
			/** the visibility variable bound to this page item */
			public visibilityVariable: any;
			/** the visible bounds of the artwork including stroke width */
			public readonly visibleBounds: any[];
			/** the width of the art item ( 0.0 - 16348.0 ) */
			public width: number;
			/** should the text frame object be wrapped inside this object? */
			public wrapInside: boolean;
			/** use this offset when wrapping text around this object */
			public wrapOffset: number;
			/**
			 * wrap text frame objects around this object (text frame must 
			 * be above the object)
			 */
			public wrapped: boolean;
			/** the drawing order of the art within it's group or layer */
			public readonly zOrderPosition: number;
			/**
			 * Apply effect to selected artItem
			 * @param {string} liveEffectXML 
			 */
			public applyEffect(liveEffectXML: string): void;
			/**
			 * Place art object(s)in perspective grid at spedified 
			 * perspective plane and coordinate
			 * @param {number} positionX position towards X direction of 
			 * specified or active perspective grid plane
			 * @param {number} positionY position towards Y direction of 
			 * specified or active perspective grid plane
			 * @param {Adobe.Illustrator.PerspectiveGridPlaneType} 
			 * perspectiveGridPlane Type of perspective grid plane.
			 */
			public bringInPerspective(positionX: number, positionY: number, perspectiveGridPlane: Adobe.Illustrator.PerspectiveGridPlaneType): void;
			/**
			 * create a duplicate of the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation ( default: ElementPlacement.INSIDE )
			 */
			public duplicate(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): Adobe.Illustrator.PageItem;
			/**
			 * move the object
			 * @param {any} relativeObject 
			 * @param {Adobe.Illustrator.ElementPlacement} 
			 * insertionLocation 
			 */
			public move(relativeObject: any, insertionLocation: Adobe.Illustrator.ElementPlacement): void;
			/** delete the object */
			public remove(): void;
			/**
			 * Scale art object(s)
			 * @param {number} scaleX horizontal scaling factor expressed 
			 * as a percentage (100 = 100%)
			 * @param {number} scaleY vertical scaling factor expressed as 
			 * a percentage (100 = 100%)
			 * @param {boolean} changePositions are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients are the fill gradients 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeStrokePattern are the stroke patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {number} changeLineWidths the amount line widths are 
			 * to be scaled (expressed as a percentage) ( default: 100.0 )
			 * @param {Adobe.Illustrator.Transformation} scaleAbout the 
			 * point on the art item's bounding box to which the scale is 
			 * applied ( default: Transformation.CENTER )
			 */
			public resize(scaleX: number, scaleY: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, scaleAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Rotate art object(s)
			 * @param {number} angle angle of rotation (in degrees). 
			 * Rotation is performed counter-clock wise
			 * @param {boolean} changePositions are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients are the fill gradients 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeStrokePattern are the stroke patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {Adobe.Illustrator.Transformation} rotateAbout the 
			 * point on the art item's bounding box to which the rotation 
			 * is applied ( default: Transformation.CENTER )
			 */
			public rotate(angle: number, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, rotateAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * sends the script message to the required plugin
			 * @param {string} pluginName Plugin to which message needs to 
			 * be sent
			 * @param {string} messageSelector Functionality that is to be 
			 * executed
			 * @param {string} inputString Pass any data encoded in a 
			 * string.
			 */
			public sendScriptMessage(pluginName: string, messageSelector: string, inputString: string): string;
			/**
			 * Transform art object(s) using a transformation matrix
			 * @param {Adobe.Illustrator.Matrix} transformationMatrix the 
			 * transformation matrix to be applied to the objects
			 * @param {boolean} changePositions are art object positions 
			 * and orientations effected? ( default: true )
			 * @param {boolean} changeFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeFillGradients are the fill gradients 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} changeStrokePattern are the stroke patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {number} changeLineWidths the amount line widths are 
			 * to be scaled (expressed as a percentage) ( default: 100.0 )
			 * @param {Adobe.Illustrator.Transformation} transformAbout the 
			 * point on the art item's bounding box to which scale and 
			 * rotation operations apply ( default: Transformation.CENTER )
			 */
			public transform(transformationMatrix: Adobe.Illustrator.Matrix, changePositions: boolean, changeFillPatterns: boolean, changeFillGradients: boolean, changeStrokePattern: boolean, changeLineWidths: number, transformAbout: Adobe.Illustrator.Transformation): void;
			/**
			 * Reposition art object(s)
			 * @param {number} deltaX horizontal transformation ( default: 
			 * 0.0 )
			 * @param {number} deltaY vertical transformation ( default: 
			 * 0.0 )
			 * @param {boolean} transformObjects are art object positions 
			 * and orientations affected? ( default: true )
			 * @param {boolean} transformFillPatterns are the fill patterns 
			 * assigned to paths to be transformed? ( default: true )
			 * @param {boolean} transformFillGradients are the fill 
			 * gradients assigned to paths to be transformed? ( default: 
			 * true )
			 * @param {boolean} transformStrokePattern are the stroke 
			 * patterns assigned to paths to be transformed? ( default: 
			 * true )
			 */
			public translate(deltaX: number, deltaY: number, transformObjects: boolean, transformFillPatterns: boolean, transformFillGradients: boolean, transformStrokePattern: boolean): void;
			/**
			 * Arranges the art relative to other art in the group or layer
			 * @param {Adobe.Illustrator.ZOrderMethod} zOrderCmd how to 
			 * arrange the art
			 */
			public zOrder(zOrderCmd: Adobe.Illustrator.ZOrderMethod): void;
		}
	}
}