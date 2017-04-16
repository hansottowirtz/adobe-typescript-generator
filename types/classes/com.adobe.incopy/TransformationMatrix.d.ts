/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TransformationMatrix extends Adobe.Csawlib.CSHostObject {
			/** The shear angle of the transformation matrix. */
			public readonly clockwiseShearAngle: number;
			/** The rotation angle of the transformation matrix. */
			public readonly counterclockwiseRotationAngle: number;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/** The horizontal scale factor of the transformation matrix. */
			public readonly horizontalScaleFactor: number;
			/** The horizontal translation of the transformation matrix. */
			public readonly horizontalTranslation: number;
			/**
			 * The index of the TransformationMatrix within its containing 
			 * object.
			 */
			public readonly index: number;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The mapping the transformation matrix performs on the unit 
			 * triangle. Can return: Array of Array of 2 Arrays of 2 Reals.
			 */
			public readonly matrixMapping: any;
			/** The values of the transformation matrix. */
			public readonly matrixValues: any;
			/** The name of the TransformationMatrix. */
			public readonly name: string;
			/** The parent of the TransformationMatrix (a Application). */
			public readonly parent: Adobe.Incopy.Application;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/** The vertical scale factor of the transformation matrix. */
			public readonly verticalScaleFactor: number;
			/** The vertical translation of the transformation matrix. */
			public readonly verticalTranslation: number;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTransformationMatrix(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Multiply the transformation matrix by another.
			 * @param {TransformationMatrix} withMatrixParam The right hand 
			 * matrix factor
			 */
			public catenateMatrix(withMatrixParam: TransformationMatrix): Adobe.Incopy.TransformationMatrix;
			/**
			 * Multiply the point by the matrix.
			 * @param {any[]} pointParam The point to transform
			 */
			public changeCoordinates(pointParam: any[]): any;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/** Invert the transformation matrix. */
			public invertMatrix(): Adobe.Incopy.TransformationMatrix;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTransformationMatrix(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/**
			 * Rotate the transformation matrix.
			 * @param {number} byAngleParam The counterclockwise rotation 
			 * angle (Optional)
			 * @param {number} byCosineParam The cosine of the desired 
			 * rotation (Optional)
			 * @param {number} bySineParam The sine of the desired rotation 
			 * (Optional)
			 */
			public rotateMatrix(byAngleParam: number, byCosineParam: number, bySineParam: number): Adobe.Incopy.TransformationMatrix;
			/**
			 * Scale the transformation matrix.
			 * @param {number} horizontallyByParam The horizontal scale 
			 * factor (Optional)
			 * @param {number} verticallyByParam The vertical scale factor 
			 * (Optional)
			 */
			public scaleMatrix(horizontallyByParam: number, verticallyByParam: number): Adobe.Incopy.TransformationMatrix;
			/**
			 * Shear the transformation matrix.
			 * @param {number} byAngleParam The horizontal shear angle 
			 * (Optional)
			 * @param {number} bySlopeParam The horizontal shear slope 
			 * (Optional)
			 */
			public shearMatrix(byAngleParam: number, bySlopeParam: number): Adobe.Incopy.TransformationMatrix;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
			/**
			 * Translate the transformation matrix.
			 * @param {number} horizontallyByParam The horizontal 
			 * translation distance (Optional)
			 * @param {number} verticallyByParam The vertical translation 
			 * distance (Optional)
			 */
			public translateMatrix(horizontallyByParam: number, verticallyByParam: number): Adobe.Incopy.TransformationMatrix;
		}
	}
}