/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/** The Frame object represents frames in the layer. */
		class Frame extends Adobe.Csawlib.CSHostObject {
			/**
			 * String representing the ActionScript
			 * @type {string}
			 */
			public actionScript: string;
			/**
			 * Number of frames in a frame sequence
			 * @type {number}
			 * @readonly
			 */
			public readonly duration: number;
			/**
			 * An array of element objects. The order of elements is 
			 * basically the order in of how they are stored in the FLA 
			 * file.
			 * 
			 * Note: Flash treats ungroup shapes as 1 element object. For 
			 * example: if a frame contains 3 raw shapes, then 
			 * elements.length in that frame returns 1.  Group the shapes 
			 * to individual group to work around this issue.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly elements: any[];
			/**
			 * If true, the frame gets ease information from the custom 
			 * ease curve.  If false the frame gets its ease information 
			 * from the ease value.
			 * @type {boolean}
			 */
			public hasCustomEase: boolean;
			/**
			 * This specifies the type of Frame name. Acceptable values 
			 * are: "none", "name", "comment", "anchor".  Note, setting a 
			 * label to none will clear out the frame.name property.
			 * @type {string}
			 */
			public labelType: string;
			/**
			 * If set to true, object will remain oriented to path, if set 
			 * to false object will not.
			 * @type {boolean}
			 */
			public motionTweenOrientToPath: boolean;
			/**
			 * Specifies if the object will rotate during the tween. 
			 * Acceptable values are: "none", "auto", "clockwise", 
			 * "counter-clockwise"
			 * @type {string}
			 */
			public motionTweenRotate: string;
			/**
			 * Number of times to rotate the element in the starting 
			 * keyframe by the time it gets to the next keyframe.
			 * @type {number}
			 */
			public motionTweenRotateTimes: number;
			/**
			 * If set to true, the tween should scale. If set to false, it 
			 * will not.
			 * @type {boolean}
			 */
			public motionTweenScale: boolean;
			/**
			 * If set to true, object will automatically snap to motion 
			 * guide. If set to false it will not.
			 * @type {boolean}
			 */
			public motionTweenSnap: boolean;
			/**
			 * If set to true, will sync symbols. If set to false, it will 
			 * not.
			 * @type {boolean}
			 */
			public motionTweenSync: boolean;
			/**
			 * Label of the frame.
			 * @type {string}
			 */
			public name: string;
			/**
			 * Specifies whether the shape tween is "distributive" or 
			 * "angular"
			 * @type {string}
			 */
			public shapeTweenBlend: string;
			/**
			 * The effects on the sound. Acceptable values are: "none", 
			 * "left channel", "right channel", "fade left to right", "fade 
			 * right to left", "fade in", "fade out", "custom"
			 * @type {string}
			 */
			public soundEffect: string;
			/**
			 * Library item used to instantiate this sound.
			 * @type {Adobe.Flashpro.SoundItem}
			 */
			public soundLibraryItem: Adobe.Flashpro.SoundItem;
			/**
			 * An integer value for Loop to specify the number of times the 
			 * sound should loop.
			 * @type {number}
			 */
			public soundLoop: number;
			/**
			 * Specifies whether sound should repeat a specific number of 
			 * times, or loop indefinitely. Acceptable values are: 
			 * "repeat", "loop"
			 * @type {string}
			 */
			public soundLoopMode: string;
			/**
			 * Name of sound.
			 * @type {string}
			 */
			public soundName: string;
			/**
			 * Specifies the sync behavior of the sound. Acceptable values 
			 * are: "event", "stop", "start", "stream"
			 * @type {string}
			 */
			public soundSync: string;
			/**
			 * The frame number of the first frame in a sequence
			 * @type {number}
			 * @readonly
			 */
			public readonly startFrame: number;
			/**
			 * The amount of easing. Acceptable values are: -100 to 100
			 * @type {number}
			 */
			public tweenEasing: number;
			/**
			 * Determine or give an instance name to the selected motion 
			 * object.
			 * @type {string}
			 */
			public tweenInstanceName: string;
			/**
			 * Acceptable values are "motion" or "shape".
			 * @type {string}
			 */
			public tweenType: string;
			/**
			 * If true, one custome ease curve is used for easing 
			 * information for all properties.  If false each property has 
			 * its own ease curve.  This property will have no effect 
			 * unless property hasCustomEase is set to true.
			 * @type {boolean}
			 */
			public useSingleEaseCurve: boolean;
			/**
			 * Adds an item from the current stage to the specified frame.
			 * @param {any} shape shape object to add to the frame
			 * @returns {void}
			 */
			public addItem(shape: any): void;
			/**
			 * Converts the selected motion object to a 2D motion object.
			 * @returns {void}
			 */
			public convertMotionObjectTo2D(): void;
			/**
			 * Converts the selected motion object to a 3D motion object.
			 * @returns {void}
			 */
			public convertMotionObjectTo3D(): void;
			/**
			 * returns an array of objects.  The objects returned have an x 
			 * and y property.
			 * @param {string} prop Sets the property to get the ease curve 
			 * for.  Allowable values: "all", "position", "rotation", 
			 * scale", "color", "filters"
			 * @returns {any[]}
			 */
			public getCustomEase(prop: string): any[];
			/**
			 * Gives you the motion XML from the selected motion object.
			 * @returns {string}
			 */
			public getMotionObjectXML(): string;
			/**
			 * Lets you know whether the current selection has a motion 
			 * path.
			 * @returns {boolean}
			 */
			public hasMotionPath(): boolean;
			/**
			 * Lets you know if the current selection is a 3D motion 
			 * object.
			 * @returns {boolean}
			 */
			public is3DMotionObject_(): boolean;
			/**
			 * Find out whether the current selection is a motion object or 
			 * not.
			 * @returns {boolean}
			 */
			public isMotionObject(): boolean;
			/**
			 * Selects or deselects the motion objects path.
			 * @param {boolean} select Selects (true) or deselects (false) 
			 * the motion path of the current motion object.
			 * @returns {void}
			 */
			public selectMotionPath(select: boolean): void;
			/**
			 * Set a cubic Bezier curve to be used as a custom ease curve.
			 * @param {string} property indicates which property the ease 
			 * curve should be used for.  Allowable values:  "all", 
			 * "position", "rotation", "scale", "color", "filters"
			 * @param {any} easeCurve the array of data that defines the 
			 * ease curve.  Each array element should be a JS object with 2 
			 * properties: x and y.
			 * @returns {void}
			 */
			public setCustomEase(property: string, easeCurve: any): void;
			/**
			 * Sets the duration (tween span length) of the currently 
			 * selected motion object.
			 * @param {number} duration Set the number of frames duration 
			 * for the tween span of the selected motion object.
			 * @param {boolean} stretchExistingKeyframes Determines whether 
			 * the tween span is stretched or frames are added to the end 
			 * of the last frame.
			 * @returns {void}
			 */
			public setMotionObjectDuration(duration: number, stretchExistingKeyframes: boolean): void;
			/**
			 * Applies the specified motion XML to the selected motion 
			 * object.
			 * @param {string} xmlstr Points to the XML string
			 * @param {boolean} endAtCurrentLocation Set whether the tween 
			 * starts or ends at the current position.
			 * @returns {void}
			 */
			public setMotionObjectXML(xmlstr: string, endAtCurrentLocation: boolean): void;
		}
	}
}