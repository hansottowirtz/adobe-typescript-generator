/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/** The Timeline object represents the Timeline. */
		class Timeline extends Adobe.Csawlib.CSHostObject {
			/**
			 * The frame number for the current playhead.
			 * @type {number}
			 */
			public currentFrame: number;
			/**
			 * The currently active layer.
			 * @type {number}
			 */
			public currentLayer: number;
			/**
			 * the length of the longest layer in a scene
			 * @type {number}
			 * @readonly
			 */
			public readonly frameCount: number;
			/**
			 * number of layers in the timeline being referred to.
			 * @type {number}
			 * @readonly
			 */
			public readonly layerCount: number;
			/**
			 * An array of layer objects.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly layers: any[];
			/**
			 * If the timeline's libraryItem property is null, the timeline 
			 * belongs to a scene. If it's not null, you can treat it like 
			 * a LibraryItem object.
			 * @type {any}
			 * @readonly
			 */
			public readonly libraryItem: any;
			/**
			 * Name of the timeline. Used when working with scenes.
			 * @type {string}
			 */
			public name: string;
			/**
			 * Add a motion guide layer above the current layer and attach 
			 * the current layer to the newly added guide layer.
			 * The current layer after addMotionGuide is the Motion Guide 
			 * layer. 
			 * addMotionGuide only functions on 'normal' type layer.  It 
			 * will not do anything on folder, mask, masked, guide, and 
			 * guided layer. 
			 * -1 if current layer type is not normal, otherwise the layer 
			 * index of the newly added guide layer is returned.
			 * @returns {number}
			 */
			public addMotionGuide(): number;
			/**
			 * Adds a new layer to the document and makes it the current 
			 * layer.
			 * 
			 * RETURNS: Returns the index of the newly created layer.
			 * @param {string} name name is a string that specifies the 
			 * name for the new layer. If name
			 * @param {string} layerType Type of layer to add.  If not 
			 * specified, a normal layer will be created.  The layer types 
			 * are defined in the "layerType" property of the Layer object.
			 * @param {boolean} bAddAbove If true, add the layer above the 
			 * current layer.  If false, add the layer below the current 
			 * layer.  Defaults to true.
			 * @returns {void}
			 */
			public addNewLayer(name: string, layerType: string, bAddAbove: boolean): void;
			/**
			 * Deletes all the contents from within a frame.
			 * @param {number} startFrame clear a range of frame from 
			 * startFrame up to but not including endFrame. If startFrame 
			 * is not specified, use the current selection. If startFrame 
			 * is specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @param {number} endFrame clear a range of frame from 
			 * startFrame up to but not including endFrame. If startFrame 
			 * is not specified, use the current selection. If startFrame 
			 * is specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public clearFrames(startFrame: number, endFrame: number): void;
			/**
			 * Converts keyframe to a regular frame and deletes its 
			 * contents
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public clearKeyframes(startFrame: number, endFrame: number): void;
			/**
			 * converts from the startFrame up to but not including 
			 * endFrame, or selection if no frames are specified to blank 
			 * keyframes.
			 * @param {number} startFrame starting frame to convert to 
			 * keyframes.  If startFrame isn't specified the existing 
			 * selection will be used.
			 * @param {number} endFrame ending frame to convert to 
			 * keyframes, if this isn't specified and startFrame is 
			 * endFrame will default to the value of startFrame.
			 * @returns {void}
			 */
			public convertToBlankKeyframes(startFrame: number, endFrame: number): void;
			/**
			 * Convert the range of frames from startFrame up to but not 
			 * including endFrame, or the selection if no frames are 
			 * specified to keyframes.
			 * @param {number} startFrame starting frame to convert to 
			 * keyframes.  If startFrame isn't specified the existing 
			 * selection will be used.
			 * @param {number} endFrame up to but not including ending 
			 * frame to convert to keyframes, if this isn't specified and 
			 * startFrame is endFrame will default to the value of 
			 * startFrame.
			 * @returns {void}
			 */
			public convertToKeyframes(startFrame: number, endFrame: number): void;
			/**
			 * Copies from startFrame up to but not including endFrame to 
			 * the clipboard.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public copyFrames(startFrame: number, endFrame: number): void;
			/**
			 * Copy the layers that are currently selected in the timeline. 
			 * Results are saved to a layer clipboard (this does not alter 
			 * the contents of the system clipboard). Optional arguments 
			 * can be provided in order to specify a layer or range of 
			 * layers to cut: One parameter: layerIndex Two parameters: 
			 * startIndex, endIndex
			 * @returns {boolean}
			 */
			public copyLayers(): boolean;
			/**
			 * Method; copies motion on selected frames, either from a 
			 * motion tween or from frame by
			 * frame animation.
			 * @returns {void}
			 */
			public copyMotion(): void;
			/**
			 * Method; Copies the motion of the selected frames to the 
			 * clipboard as ActionScript 3.
			 * @returns {void}
			 */
			public copyMotionAsAS3(): void;
			/**
			 * This always runs in silent mode to keep the api from 
			 * displaying any dialogs/message boxes. Thus any non-tweenable 
			 * target is auto converted to a movie clip and selected items 
			 * may be moved to a new layer if required. In the multiple 
			 * selection case, a dialog will appear of one or more of the 
			 * selected frames could not become a motion object. The 
			 * parameters are the same as for the existing 
			 * timeline.createMotionTween which is used to create classic 
			 * tweens EXCEPT that the endFrame parameter includes the last 
			 * frame you want selected before the create is called.. The 
			 * params are optional and if provided they change the timeline 
			 * selection prior to creating the motion object.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame. 
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame. 
			 * @returns {void}
			 */
			public createMotionObject(startFrame: number, endFrame: number): void;
			/**
			 * For each selected keyframe set the tweenType property to 
			 * motion, and converts the frame's contents to a single symbol 
			 * instance if it already isn't one. This is the same as using 
			 * the create motion tween menu item.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public createMotionTween(startFrame: number, endFrame: number): void;
			/**
			 * Cuts the range of frames to the clipboard.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public cutFrames(startFrame: number, endFrame: number): void;
			/**
			 * Cut the layers that are currently selected in the timeline.  
			 * Results are saved to a layer clipboard (this does not alter 
			 * the contents of the system clipboard).   Optional arguments 
			 * can be provided in order to specify a layer or range of 
			 * layers to cut:
			 * One parameter:  layerIndex
			 * Two parameters:  startIndex, endIndex
			 * @param {number} startIndex Index of layer to cut, or the 
			 * first index in a range that specifies the start index of the 
			 * range of layers to cut.
			 * @returns {boolean}
			 */
			public cutLayers(startIndex: number): boolean;
			/**
			 * Deletes the layer. If the layer is a folder, all layers 
			 * within the folder will be deleted.  If the layer index isn't 
			 * specified it will operate against the currently selected 
			 * layers.
			 * @param {number} index index of the layer to be deleted. If 
			 * there is only 1 layer in the timeline, deleteLayer will not 
			 * do anything
			 * @returns {void}
			 */
			public deleteLayer(index: number): void;
			/**
			 * Duplicate the selected layers, or the layer at the specified 
			 * index, or a range of layers above the top layer of the 
			 * selection.  Optional parameters include:
			 * One parameter:  layerIndex - duplicate the layer at the 
			 * specified index
			 * Two parameters:  startIndex, endIndex - duplicate the range 
			 * of layers specified
			 * @returns {number}
			 */
			public duplicateLayers(): number;
			/**
			 * Expands/Collapses the folder.
			 * @param {boolean} bExpand bExpand, if TRUE, the folder will 
			 * be expanded.  Note you can collapse a non-layer folder (it 
			 * means to collapse it's parent).
			 * @param {boolean} bRecurseNestedParents If true all the 
			 * layers within the specified folder will be opened or closed 
			 * based on the expand parameter.
			 * @param {number} index Index of folder to expand/collapse.  
			 * Use -1 to apply to all layers (you'll need to set 
			 * recurseNestedFolders to true as well)  This is how the 
			 * Expand All/Collapse All menu items work.
			 * @returns {void}
			 */
			public expandFolder(bExpand: boolean, bRecurseNestedParents: boolean, index: number): void;
			/**
			 * Finds an array of indices for the layers with the given 
			 * name. The layers index is flat, so folders are considered 
			 * part of the main index. 
			 * undefined is returned when a layers with the given name is 
			 * not found.
			 * @param {string} name the name of the layer to find
			 * @returns {any[]}
			 */
			public findLayerIndex(name: string): any[];
			/**
			 * Gets the specified property's value of the selected frames. 
			 * 
			 * 
			 * RETURNS: value of property, or undefined if all of the 
			 * selected frames don't have the same property value
			 * @param {string} property specifies which property's value 
			 * you want returnedList of properties
			 * @returns {any}
			 */
			public getFrameProperty(property: string): any;
			/**
			 * Returns an XML string representing the current state of the 
			 * guidelines for a particular timeline.
			 * @returns {string}
			 */
			public getGuidelines(): string;
			/**
			 * Gets the specified property's value of the selected layers.  
			 * 
			 * 
			 * 
			 * RETURNS: value of property, look at the layer's properties 
			 * to determine the type. If all of the selected layers don't 
			 * have the same property value, the undefined value is 
			 * returned.
			 * @param {string} property The name of the property to get the 
			 * value of.  
			 * @returns {any}
			 */
			public getLayerProperty(property: string): any;
			/**
			 * Gets the currently selected frames in an array.
			 * 
			 * RETURNS: An array containing 3n integers, where n is the 
			 * number of selected regions. The first integer in each pair 
			 * is the layer index, the second is the start frame of the 
			 * beginning of the selection; the third integer is up to but 
			 * not including the ending frame of that selection range.
			 * @returns {any[]}
			 */
			public getSelectedFrames(): any[];
			/**
			 * Get the indices of the currently selected Layers.
			 * 
			 * RETURNS: an array containing zero-based indecies of the 
			 * selected layers.
			 * @returns {any[]}
			 */
			public getSelectedLayers(): any[];
			/**
			 * Inserts a blank keyframe at the specified frame, inserts the 
			 * blank keyframe using the playback head/selection if frame 
			 * isn't specified.
			 * @param {number} frameNum frameNumber to insert the keyframe 
			 * at.  If frameNum is not specified, use the current playhead. 
			 * @returns {void}
			 */
			public insertBlankKeyframe(frameNum: number): void;
			/**
			 * Inserts the specified number of frames at the given frame 
			 * number. 
			 * 
			 * If no parameters are specified, it inserts frames using the 
			 * current selection (using the selection start frame for 
			 * location and length to determine how many frames to insert 
			 * at each group of selected frames). If no selection is 
			 * present it will insert 1 frame at the current frame into all 
			 * layers.
			 * 
			 * Otherwise it will insert the numFrames into either all of 
			 * the layers (based on allLayers parameter) or into the 
			 * current layer at the specified frameNum (or the currentFrame 
			 * if unspecified).
			 * @param {number} numFrames The number of frames to insert. If 
			 * not specified, insert frames at the current selection on 
			 * current layer
			 * @param {boolean} bAllLayers if true insert the specified 
			 * number of frames in numFrames into all layers, if false 
			 * insert frames into the current layer. Default value is true.
			 * @param {number} frameNum frameNum is the frame number to 
			 * insert a frame.
			 * @returns {void}
			 */
			public insertFrames(numFrames: number, bAllLayers: boolean, frameNum: number): void;
			/**
			 * Inserts a keyframe at the specified frame, inserts keyframe 
			 * using the playback head/selection if frame isn't specified.
			 * @param {number} frameNum The frameNumber to insert the 
			 * keyframe at on current layer.  If frameNum is not specified, 
			 * use the current playhead.
			 * @returns {void}
			 */
			public insertKeyframe(frameNum: number): void;
			/**
			 * Paste the range of frames from the clipboard into the 
			 * specified frames.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public pasteFrames(startFrame: number, endFrame: number): void;
			/**
			 * Paste layers that have been previously cut or copied to the 
			 * layer clipboard above the currently selected layer, or above 
			 * the specified index.  If the specified layer is a folder 
			 * then paste into the folder.  Return the highest layer index 
			 * of the layers that were pasted.  This action does not affect 
			 * the system clipboard.
			 * Optional parameters: layerIndex - paste above this layer 
			 * index
			 * @returns {number}
			 */
			public pasteLayers(): number;
			/**
			 * Method; pastes motion on selected frames, either from a 
			 * copied motion tween or from frame by frame animation.
			 * @returns {any}
			 */
			public pasteMotion(): any;
			/**
			 * Deletes the frame.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames to remove. If 
			 * startFrame is not specified, use the current selection, if 
			 * there is no selection, all frames at the current playhead on 
			 * all layers will be removed. If startFrame is specified, but 
			 * endFrame is not, endFrame defaults to startFrame.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames to remove. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame.
			 * @returns {void}
			 */
			public removeFrames(startFrame: number, endFrame: number): void;
			/**
			 * removes the motion object and converts the frame(s) back to 
			 * static. The parameters are optional and if provided set the 
			 * timeline selection to the indicated frames prior to 
			 * executing the removal.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame. 
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. If startFrame is 
			 * specified, but endFrame is not, endFrame defaults to 
			 * startFrame. 
			 * @returns {void}
			 */
			public removeMotionObject(startFrame: number, endFrame: number): void;
			/**
			 * Moves the specified layer before or after the specified 
			 * layer.
			 * @param {number} layerToMove The first argument is a 
			 * zero-based integer that specifies which layer to
			 * @param {number} layerToPutItBy The second argument is a 
			 * zero-based integer that specifies which layer you
			 * @param {boolean} bAddBefore If true move the layer before 
			 * layerToPutItBy, if false move the layer after 
			 * layerToPutItBy.  Default value is true
			 * @returns {void}
			 */
			public reorderLayer(layerToMove: number, layerToPutItBy: number, bAddBefore: boolean): void;
			/**
			 * Inverse a range of frames.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frames. If startFrame is 
			 * not specified, use the current selection.
			 * @param {number} endFrame startFrame up to but not including 
			 * endFrame is the range of frames. If startFrame is not 
			 * specified, use the current selection. 
			 * @returns {void}
			 */
			public reverseFrames(startFrame: number, endFrame: number): void;
			/**
			 * Selects all the frames in the current timeline.
			 * @returns {void}
			 */
			public selectAllFrames(): void;
			/**
			 * Sets the property of the frame object for the selected 
			 * frames.
			 * @param {string} property name of the property to be modified
			 * @param {any} value new value of the property being set.  See 
			 * frame properties to determine the appropriate values and 
			 * type.
			 * @param {number} startFrame starting frame number to modify, 
			 * if it's not specified the existing selection will be used.
			 * @param {number} endFrame up to but not including endFrame 
			 * number to be modified.  If it's not specified endFrame will 
			 * default to startFrame.
			 * @returns {void}
			 */
			public setFrameProperty(property: string, value: any, startFrame: number, endFrame: number): void;
			/**
			 * Updates the timeline's guideline information based on the 
			 * input XML string
			 * @param {string} xml The setter accepts XML data and replaces 
			 * all guidelines currently in the timeline with the ones in 
			 * the XML string.
			 * @returns {boolean}
			 */
			public setGuidelines(xml: string): boolean;
			/**
			 * Sets the specified property on all of the selected layers to 
			 * value.
			 * @param {string} property The property to set. - see 
			 * individual properties under Layer object
			 * @param {any} value The value to set the property to.  Use 
			 * the same type of value you would use when setting the 
			 * property on the layer object.
			 * @param {string} layersToChange Identifies which layers 
			 * should be modified.  Choices are 'selected', 'all', 
			 * 'others'.  The default value is 'selected' if it isn't 
			 * supplied.
			 * @returns {void}
			 */
			public setLayerProperty(property: string, value: any, layersToChange: string): void;
			/**
			 * setSelectedFrames(int,int,Boolean -- Selects the range of 
			 * frames in the current layer.
			 * @param {number} startFrame startFrame up to but not 
			 * including endFrame is the range of frame to select
			 * @param {number} endFrame endFrame- last frame in the range 
			 * to select
			 * @param {boolean} bReplaceCurrentSelection if 
			 * bReplaceCurrentSelection, the currently selected frames are 
			 * deselected before selecting the specified frames. Optional, 
			 * default is true. 
			 * @returns {void}
			 */
			public setSelectedFrames(startFrame: number, endFrame: number, bReplaceCurrentSelection: boolean): void;
			/**
			 * setSelectedFrames(array, Boolean -- sets the selected frames 
			 * to theSelection array passed into this function.  Will 
			 * extend or replace the selection as indicated by the 
			 * bReplaceCurrentSelection parameter.
			 * @param {any} selectionList An array of 3n integers as 
			 * returned by getSelectedFrames().  (layerIndex, startFrame, 
			 * endFrame)
			 * @param {boolean} bReplaceCurrentSelection true specifies to 
			 * replace the current selection, false means to extend the 
			 * current selection.  Default value for this parameter is true 
			 * (replace the current selection)
			 * @returns {void}
			 */
			public setSelectedFrames2(selectionList: any, bReplaceCurrentSelection: boolean): void;
			/**
			 * Sets the layer to be selected, also makes it the current 
			 * layer.  Selecting a layer also means that all the frames in 
			 * the layer will be selected.
			 * @param {number} index index is the zero based index for the 
			 * layer to select.
			 * @param {boolean} bReplaceCurrentSelection 
			 * bReplaceCurrentSelection for erasing current selection. If 
			 * not set defaults to true.
			 * @returns {void}
			 */
			public setSelectedLayers(index: number, bReplaceCurrentSelection: boolean): void;
			/**
			 * Show the layer masking during authoring by locking the mask 
			 * and masked layers.  Uses the current layer if no layer is 
			 * passed in.
			 * @param {number} layer index of a mask or masked layer to 
			 * show masking on during authoring
			 * @returns {void}
			 */
			public showLayerMasking(layer: number): void;
			/**
			 * Starts auto playback of the timeline if the timeline is not 
			 * currently playing.
			 * @returns {boolean}
			 */
			public startPlayback(): boolean;
			/**
			 * Stops auto playback of the timeline if it is currently 
			 * playing.
			 * @returns {boolean}
			 */
			public stopPlayback(): boolean;
		}
	}
}