import _ from 'lodash';
import * as I from '@modules/interfaces';
import * as MathJS from 'mathjs';
import * as Vts    from 'vee-type-safe';
import { assert, Log  } from '@modules/debug';
import { IntegerRange } from '@modules/integer-range';

/**
 * Tries to read variable from `process.env` and returns its value.
 * @param variableId Environmental variable name.
 * @param defaultVal If default value is provided, it will be returned when
 *                   actual env variable is not defined.
 * 
 * @throws Error if `defaultVal == null` and `!(variableId in process.env)`.
 */
export function tryReadEnv(variableId: string, defaultVal?: I.Maybe<string>) {
    if (variableId in process.env) {
        return process.env[variableId]!;
    }
    if (defaultVal != null) {
        return defaultVal;
    }
    throw new Error(
        `failed to read '${variableId}' environment variable`
    );
}

/**
 * Returns a random item from the given array. 
 * If array.length is 0 or subarrayRange goes beyond array index limits, 
 * may return `undefined`.
 * @param arr           Array to get random item from.
 * @param subarrayRange IntegerRange which defines subarray indexes to pick
 *                      items from, if not specified, takes items from the whole 
 *                      array.
 */
export function pickRandom<T>(
    arr:           ReadonlyArray<T>, 
    subarrayRange: IntegerRange = new IntegerRange(0, arr.length)
) {
    return arr[subarrayRange.random()];
}


/**
 * Swaps items in `arr` at indexes `i`, `j`.
 * @param arr Array to swap items in. 
 * @param i   Index of `arr` item to swap with `arr[j]`
 * @param j   Index of `arr` item to swap with `arr[i]`
 */
export function swapItems<T>(arr: T[], i: number, j: number) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


/**
 * Returns IterableIterator<T> which randomly picks each arr[i] value at most
 * times[i] times, thus creates the `_.sum(times)` iterations.
 * 
 * @copyright https://stackoverflow.com/a/196065/9259330
 * 
 * @param arr   Array to pick values from
 * @param times Array of numbers of times a value can be picked from `arr`
 * 
 * @remarks 
 * Prerequisites: arr.length === times.length and each `times[i] >= 1`.
 * Beware that this function takes ownership of `arr` and `times` references.
 * `times` and `arr` array values get randomly shuffled, moreover 
 * `times[i]` gets decreased each time `arr[i]` value was picked.
 * Thus you should copy `arr` and `times` array if those changes are unacceptable, 
 * e.g. `pickRandomItems([...arr], [...times])`
 * 
 */
export function * pickRandomItems<T>(arr: T[], times: number[]) {
    assert.matches(times, [Vts.isPositiveInteger]);
    let edgeIndex = 0;
    while (edgeIndex < arr.length) {
        const randomIndex = MathJS.randomInt(edgeIndex, arr.length);
        const randomValue = arr[randomIndex];
        if (!--times[randomIndex]) {
            swapItems(arr,   randomIndex, edgeIndex);
            swapItems(times, randomIndex, edgeIndex);
            ++edgeIndex;
        }
        yield randomValue;
    }
}

/**
 * Awaits `routine()` and prints its execution time to the console.
 */
export async function measurePerformance(routine: () => Promise<void>, functionName = routine.name) {
    Log.info('invoking ${functionName}');
    const before = Date.now();
    await routine();
    const after = Date.now();
    Log.info(`${functionName} was running ${after - before} ms`);
}

/**
 * Returns a Promise, that will be resolve in `msec` miliseconds.
 */
export function delay(msec: number) {
    return new Promise<void>(resolve => setInterval(resolve, msec));
}

/**
 * Shorthand for `Vts.isBasicObject(suspect) && suspect.__proto__ === Object.prototype`.
 */
export function isPlainObject(suspect: unknown): suspect is Vts.BasicObject {
    return Vts.isBasicObject(suspect) && Object.getPrototypeOf(suspect) === Object.prototype;
}
