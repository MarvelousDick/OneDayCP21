package com.ethermorgan.onedaycp.service.impl;

import com.ethermorgan.onedaycp.mapper.TUserMapper;

import com.ethermorgan.onedaycp.mapper.WXUserInfoMapper;
import com.ethermorgan.onedaycp.model.TUser;
import com.ethermorgan.onedaycp.model.WXUserInfo;
import com.ethermorgan.onedaycp.service.UserService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//@Service(value = "userService")
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private TUserMapper userDao;//这里会报错，但是并不会影响

    @Autowired
    private WXUserInfoMapper wxUserInfoMapper;

    @Override
    public int addUser(TUser user) {

        return userDao.insert(user);
    }

    /*
     * 这个方法中用到了我们开头配置依赖的分页插件pagehelper
     * 很简单，只需要在service层传入参数，然后将参数传递给一个插件的一个静态方法即可；
     * pageNum 开始页数
     * pageSize 每页显示的数据条数
     * */
    @Override
    public PageInfo<TUser> findAllUser(int pageNum, int pageSize) {
        //将参数传给这个方法就可以实现物理分页了，非常简单。
        PageHelper.startPage(pageNum, pageSize);
        List<TUser> userDomains = userDao.selectUsers();
        PageInfo result = new PageInfo(userDomains);
        return result;
    }

    @Override
    public WXUserInfo findWxUser() {
        return wxUserInfoMapper.selectByPrimaryKey("666");
    }

}
