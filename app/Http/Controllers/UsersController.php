<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function all(Request $request) {
        return DB::table('users')
            ->get();
    }
}
